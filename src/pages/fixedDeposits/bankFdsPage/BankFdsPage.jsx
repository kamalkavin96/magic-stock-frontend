import { useState } from "react";
import {
  Building2,
  TrendingUp,
  Calendar,
  DollarSign,
  Info,
  ArrowRight,
  Shield,
  AlertTriangle,
} from "lucide-react";


export default function BankFdsPage() {
  const [selectedTenure, setSelectedTenure] = useState("1-year");

  const bankRates = [
    {
      bank: "State Bank of India",
      logo: "https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg",
      generalRate: 6.75,
      seniorRate: 7.25,
      minAmount: 1000,
      ratings: "AAA",
    },
    {
      bank: "HDFC Bank",
      logo: "https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg",
      generalRate: 7.0,
      seniorRate: 7.5,
      minAmount: 5000,
      ratings: "AAA",
    },
    {
      bank: "ICICI Bank",
      logo: "https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg",
      generalRate: 6.9,
      seniorRate: 7.4,
      minAmount: 10000,
      ratings: "AAA",
    },
  ];

  const features = [
    {
      title: "Guaranteed Returns",
      description:
        "Fixed interest rates provide assured returns on your investment",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      title: "Flexible Tenures",
      description:
        "Choose from various time periods ranging from 7 days to 10 years",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Safe Investment",
      description: "Deposits up to ₹5 lakhs are insured by DICGC",
      icon: <Shield className="h-5 w-5" />,
    },
  ];

  const tenureOptions = [
    "7-days",
    "15-days",
    "1-month",
    "3-months",
    "6-months",
    "1-year",
    "2-years",
    "3-years",
    "5-years",
    "10-years",
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Bank Fixed Deposits</h1>
        <p className="text-muted-foreground mt-2">
          Compare bank FD rates and invest in secure fixed deposits with leading banks
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Compare FD Rates</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {tenureOptions.map((tenure) => (
              <button
                key={tenure}
                variant={selectedTenure === tenure ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTenure(tenure)}
              >
                {tenure}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">Bank</th>
                <th className="text-right px-6 py-3 text-sm font-medium text-muted-foreground">General Rate</th>
                <th className="text-right px-6 py-3 text-sm font-medium text-muted-foreground">Senior Citizen</th>
                <th className="text-right px-6 py-3 text-sm font-medium text-muted-foreground">Min Amount</th>
                <th className="text-right px-6 py-3 text-sm font-medium text-muted-foreground">Rating</th>
                <th className="text-right px-6 py-3 text-sm font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {bankRates.map((bank) => (
                <tr key={bank.bank} className="hover:bg-muted/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={bank.logo}
                        alt={bank.bank}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span className="font-medium">{bank.bank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">{bank.generalRate}%</td>
                  <td className="px-6 py-4 text-right text-success font-medium">{bank.seniorRate}%</td>
                  <td className="px-6 py-4 text-right">₹{bank.minAmount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right font-medium">{bank.ratings}</td>
                  <td className="px-6 py-4 text-right">
                    <button size="sm">
                      Invest Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Important Information</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-warning mt-1 flex-shrink-0" />
              <span>Interest rates are subject to change without prior notice</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-warning mt-1 flex-shrink-0" />
              <span>Premature withdrawal may result in lower interest rates</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-warning mt-1 flex-shrink-0" />
              <span>TDS is applicable on interest earned as per Income Tax rules</span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Why Choose Bank FDs?</h3>
          </div>
          <ul className="space-y-3 text-sm">
            <li>✓ Safe and secure investment option</li>
            <li>✓ Guaranteed returns with fixed interest rates</li>
            <li>✓ Flexible tenure options</li>
            <li>✓ Special rates for senior citizens</li>
            <li>✓ Easy online account opening and management</li>
            <li>✓ Option for regular interest payout or cumulative growth</li>
          </ul>
        </div>
      </div>
    </div>
  );
}



// export default function BankFdsPage(){
//     return(
//         <>
//             <h1>Bank FD's</h1>
//         </>
//     )
// }