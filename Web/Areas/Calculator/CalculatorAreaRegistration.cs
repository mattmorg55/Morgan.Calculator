using System.Web.Mvc;

namespace Morgan.Calculator.Web.Areas.Calculator
{
    public class CalculatorAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Calculator";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                name: "Calculator_default",
                url: "Calculator/{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
								namespaces: new string[] { "Morgan.Calculator.Web.Areas.Calculator.Controllers" }
            );
        }
    }
}