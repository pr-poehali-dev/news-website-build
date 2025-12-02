const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#2C3E50] text-white">
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-10 text-xs">
              <div className="flex items-center gap-4">
                <span>24 JAN 10</span>
                <a href="#" className="hover:text-orange-500">ABOUT US</a>
                <a href="#" className="hover:text-orange-500">CONTACT US</a>
                <a href="#" className="hover:text-orange-500">HELP</a>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-orange-500">LOGOUT</a>
                <button className="bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-xs">
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">📈</div>
              <div>
                <h1 className="text-2xl font-bold">Smart Investor</h1>
                <p className="text-xs text-white/70">Analysis & Advice</p>
              </div>
            </div>
            
            <div className="flex-1 max-w-md ml-8">
              <div className="flex">
                <input
                  type="text"
                  placeholder="ASX Code, Company name or keyword"
                  className="flex-1 px-4 py-2 text-black rounded-l"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-6 rounded-r font-bold">
                  GO
                </button>
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-2 text-sm">
            <a href="#" className="px-4 py-2 rounded hover:bg-white/10">All the Latest</a>
            <a href="#" className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600">Recommendations</a>
            <a href="#" className="px-4 py-2 rounded hover:bg-white/10">Companies</a>
            <a href="#" className="px-4 py-2 rounded hover:bg-white/10">Portfolios</a>
            <a href="#" className="px-4 py-2 rounded hover:bg-white/10">Investor's College</a>
            <button className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 ml-auto font-bold">
              SIGN UP TODAY
            </button>
          </nav>
        </div>
      </header>

      <div className="bg-red-500 text-white px-4 py-2 text-sm">
        <span className="font-bold">SPECIAL ALERT</span> Praesent aliquam, justo convallis luctus rutrum, erat nulla fermentum diam
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://cdn.poehali.dev/projects/1200194d-dfd3-4ff6-ae95-388d106f123b/files/59a78f33-e1b1-4109-8454-f09bea6592ae.jpg"
                  alt="Featured"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h2 className="text-white font-bold text-xl">Article headline goes here</h2>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-bold text-sm mb-3">STOCKS IN NEWS</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">BHP Billion (BHP)</span>
                    <div>
                      <span className="font-semibold">874.00</span>
                      <span className="text-green-600 ml-2">+2.1%</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quintis (QTIS)</span>
                    <div>
                      <span className="font-semibold">612.10</span>
                      <span className="text-red-600 ml-2">-1.5%</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rio Billion (RIO)</span>
                    <div>
                      <span className="font-semibold">574.00</span>
                      <span className="text-green-600 ml-2">+1.8%</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ArndalGrl</span>
                    <div>
                      <span className="font-semibold">483.01</span>
                      <span className="text-red-600 ml-2">-0.3%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-bold text-sm mb-3">LATEST FEEDS</h3>
                <div className="space-y-2 text-xs">
                  <div>
                    <p className="text-gray-500">18 JAN 10 | Lorem ipsum dolor sit amet</p>
                    <a href="#" className="text-blue-600 hover:underline">More</a>
                  </div>
                  <div>
                    <p className="text-gray-500">18 JAN 10 | Consectetur adipiscing elit</p>
                    <a href="#" className="text-blue-600 hover:underline">More</a>
                  </div>
                  <div>
                    <p className="text-gray-500">17 JAN 10 | Praesent aliquam justo</p>
                    <a href="#" className="text-blue-600 hover:underline">More</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="font-bold text-xl">STOCK RESEARCH</h2>
                <button className="px-3 py-1 border rounded text-sm">BLUE CHIPS</button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:text-black">SECOND LINE</button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:text-black">SPECULATIVE</button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex gap-3">
                    <img
                      src="https://cdn.poehali.dev/projects/1200194d-dfd3-4ff6-ae95-388d106f123b/files/80b444e6-9996-4b65-8f87-0a027ddb0613.jpg"
                      alt="Research"
                      className="w-24 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-bold text-sm mb-1">BHP gets a bullet</h3>
                      <p className="text-xs text-gray-500">18 JAN 10 | Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">BUY</span>
                    <span className="text-xs text-gray-500">24 Jan 10</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Article Headline goes here</h3>
                  <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-600 text-white rounded-lg shadow p-4">
              <h3 className="font-bold mb-2">STOCKS IN RETAIL</h3>
              <p className="text-sm mb-3">Article Headline goes here</p>
              <button className="bg-orange-500 hover:bg-orange-600 w-full py-2 rounded font-bold">
                LATEST NEWS
              </button>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm">ASK THE EXPERTS</h3>
                <a href="#" className="text-xs text-blue-600">COMING UP</a>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>
                  <p className="text-xs text-blue-600 hover:underline cursor-pointer">Nulla turpis, cursus quis</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>
                  <p className="text-xs text-blue-600 hover:underline cursor-pointer">Curabitur diam, at nonummy quam</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>
                  <p className="text-xs text-blue-600 hover:underline cursor-pointer">Vivamu. Maecenas urna purus</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 rounded-lg shadow p-4 text-center">
              <h3 className="font-bold mb-2">MEMBERSHIP RENEWAL</h3>
              <p className="text-xs mb-3">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
              <button className="bg-[#2C3E50] hover:bg-[#1C2E40] text-white w-full py-2 rounded font-bold">
                RENEW NOW
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-bold text-xl mb-6">FEATURE SPOTLIGHTS</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['ANNOUNCEMENT', 'PDF', 'ARTICLE', 'ARTICLE', 'VIDEO'].map((type, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-4 text-center">
                <div className="w-full h-24 bg-gray-100 rounded flex items-center justify-center mb-3">
                  <span className="text-3xl">{type === 'VIDEO' ? '🎥' : '📄'}</span>
                </div>
                <p className="text-xs font-bold text-orange-500 mb-1">{type}:</p>
                <p className="text-xs text-blue-600 hover:underline cursor-pointer">Title goes here</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-[#2C3E50] text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-bold mb-3">Main Heading</h4>
              <ul className="space-y-1 text-white/70">
                <li>Aliquam lorem ante</li>
                <li>Eeff. Aenean fermentum</li>
                <li>Aenean leo ligula</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Main Heading</h4>
              <ul className="space-y-1 text-white/70">
                <li>Eeff, Cum sociis</li>
                <li>Maecenas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Main Heading</h4>
              <ul className="space-y-1 text-white/70">
                <li>Fermentum id</li>
                <li>Maecenas urna</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contact Details</h4>
              <ul className="space-y-1 text-white/70">
                <li>Tel: 0234 567 891</li>
                <li className="text-orange-500">info@smartinvestor.com</li>
                <li>PO Box: 1120</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-xs text-white/50">
            <p>Copyright © 2018 The Smart Investor</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
