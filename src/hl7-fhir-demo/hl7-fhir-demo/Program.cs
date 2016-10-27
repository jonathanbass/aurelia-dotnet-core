using System;
using System.Collections.Generic;
using System.Linq;
using Hl7.Fhir.Model;
using Hl7.Fhir.Rest;

namespace hl7_fhir_demo
{
    internal class Program
    {
        private static void Main()
        {
            var patient = new Patient
            {
                ManagingOrganization = new ResourceReference
                {
                    Url = new ResourceIdentity("")
                },
                Gender = AdministrativeGender.Male,
                Address = new List<Address>
                {
                    new Address
                    {
                        City = "Derby"
                    }
                }
            };

            var ectr = new Encounter();

            Console.WriteLine($"{patient.Gender}, {patient.Address.First().City}");
            Console.ReadLine();
        }
    }
}