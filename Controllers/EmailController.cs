using System.Collections.Generic;
using autosattlerei.Models;
using autosattlerei.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace autosattlerei.Controllers
{
    [Route("api/[controller]")]
    public class EmailController : Controller
    {
        private EmailAddress FromAndToEmailAddress;
        private IEmailService EmailService;

        public EmailController(EmailAddress _fromAddress, IEmailService _emailService)
        {
            FromAndToEmailAddress = _fromAddress;
            EmailService = _emailService;
        }

        [HttpGet("[action]")]
        public void Index() { }

        [HttpPost("[action]")]
        public void Index([FromBody]ContactFormModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    EmailMessage msgToSend = new EmailMessage
                    {
                        FromAddresses = new List<EmailAddress> { FromAndToEmailAddress },
                        ToAddresses = new List<EmailAddress> { FromAndToEmailAddress },
                        Content = $"Sveiki Laima,<br /><br /> Gavote naują laišką:<br /><br /> <b>Vardas: </b> " + model.Name +
                                  "<br /><b>El.pašto adresas: </b>" + model.Email +
                                  "<br /><b>Tel.nr. : </b>" + model.TelNo +
                                  "<br /><b>Žinutė:</b>" + model.Message +
                                  "<br /><br /> Geros dienos!",
                        Subject = "Gavote laišką"
                    };

                    EmailService.Send(msgToSend);
                }

            }
            catch
            {
                throw;
            }
        }
    }
}