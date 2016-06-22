using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Morgan.Calculator.Web.Startup))]

namespace Morgan.Calculator.Web
{
	public partial class Startup
	{
		public void Configuration(IAppBuilder app) {
			ConfigureAuth(app);
		}
	}
}
