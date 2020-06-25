using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Lab3.Model
{
    public class Comment
    {
        public int Id { get; set; }
        public DateTime DateComment { get; set; }
        public string Name { get; set; }
        public string TextComment { get; set; }
        public string NameView { get; set; }
        public string Token { get; set; }
    }
}
