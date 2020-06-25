using Lab3.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Lab3.Controllers
{
    public class HomeController : Controller
    {
        private readonly CommentContext db;

        private readonly GooglereCaptchaService captchaService;
        public string CaptchaCode { get; set; }
        public HomeController(CommentContext context, GooglereCaptchaService captchaService)
        {
            db = context;
            this.captchaService = captchaService;
        }
        public async Task<IActionResult> Index()
        {
            return View(await db.Comments.Where(x => x.NameView == "Index").OrderByDescending(x => x.DateComment).ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Create(Comment comment)
        {
            var verificate = captchaService.Verification(comment.Token);
            if (verificate.Result.Success && verificate.Result.Score >= 0.5)
            {
                comment.DateComment = DateTime.Now;
                db.Comments.Add(comment);
                await db.SaveChangesAsync();
                return RedirectToAction(comment.NameView);
            }
            else
                return RedirectToAction();
        }

        public async Task<IActionResult> PageTwo()
        {
            return View(await db.Comments.Where(x => x.NameView == "PageTwo").OrderByDescending(x => x.DateComment).ToListAsync());
        }
    }
}
