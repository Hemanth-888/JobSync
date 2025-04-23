import React from 'react'

function TopCompanies({ isDark }) {
  return (
    <div>
      <section className="w-full max-w-6xl mx-auto px-4 mb-10">
<h2 className="text-xl font-bold mb-4">Top Companies Hiring Now</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {[
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      hiring: 120
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      hiring: 98
    },
    {
      name: "TCS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLC2F8yYFFhCTFw51p7XrPq53vb4ageMyq2g&s",
      hiring: 150
    },
    {
        name: "Accenture",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJpgQxCXa_ut0bLFycTpPzoQXnYvgedz1Lg&s",
        hiring: 250
      },
      {
        name: "Wipro",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooAP-OuoQ5hoozFD-2rIQzy8drl5N8c9-uw&s",
        hiring: 112
      }
  ].map((company, index) => (
    <div key={index} className={`shadow-md rounded-lg p-4 flex items-center gap-4 transform transition-transform duration-300 hover:-translate-y-2 ${isDark ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <img src={company.logo} alt={company.name} className="w-12 h-12 object-contain" />
      <div>
        <h3 className="font-semibold text-lg">{company.name}</h3>
        <p className="text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}">{company.hiring}+ actively hiring</p>
      </div>
    </div>
  ))}
</div>
</section>
    </div>
  )
}

export default TopCompanies
