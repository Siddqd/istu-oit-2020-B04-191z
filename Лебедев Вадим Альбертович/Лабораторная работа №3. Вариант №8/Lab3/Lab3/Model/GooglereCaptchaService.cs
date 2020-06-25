using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Net.Http;
using System.Security.Permissions;
using System.Threading.Tasks;

namespace Lab3.Model
{
    public class GooglereCaptchaService
    {
        private readonly ReCAPTCHASettings settings;

        public GooglereCaptchaService(IOptions<ReCAPTCHASettings> settings)
        {
            this.settings = settings.Value;
        }

        public virtual async Task<GoogleResponse> Verification(string token)
        {
            var data = new GooglereCaptchaData();
            data.Response = token;
            data.Secret = settings.ReCAPTCHA_Secret_key;

            HttpClient client = new HttpClient();

            var respone = await client.GetStringAsync($"https://www.google.com/recaptcha/api/siteverify?secret={data.Secret}&response={data.Response}");
            
            var capRespone = JsonConvert.DeserializeObject<GoogleResponse>(respone);

            return capRespone;
        }
    }

    public class GooglereCaptchaData
    {
        public string Response { get; set; }

        public string Secret { get; set; }
    }

    public class GoogleResponse
    {
        public bool Success { get; set; }
        public double Score { get; set; }
        public string Action { get; set; }
        public DateTime Challenge_ts { get; set; }
        public string HostName { get; set; }
    }
}
