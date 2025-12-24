'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            
            {/* BRAND */}
            <div className="space-y-6">
                <Link href="/" className="font-(--font-cinzel) text-2xl font-bold tracking-widest text-(--color-cream-50)">
                    MAK Furnitures
                </Link>
                <p className="font-(--font-inter) text-gray-400 leading-relaxed text-sm">
                    Crafting legacy pieces since 2000. Where bespoke design meets uncompromising quality.
                </p>
                {/* <div className="flex gap-4">
                    {/* Social Placeholders 
                    <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-(--color-cognac-default) transition-colors flex items-center justify-center cursor-pointer">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h.08zm-1.08 1.838h-1.08c-2.446 0-2.822.01-3.61.047-.788.036-1.215.15-1.503.262-.377.147-.645.323-.925.603-.28.28-.456.548-.603.925-.112.288-.226.715-.262 1.503-.037.788-.047 1.164-.047 3.61v1.08c0 2.446.01 2.822.047 3.61.036.788.15 1.215.262 1.503.147.377.323.645.603.925.28.28.548.456.925.603.288.112.715.226 1.503.262.788.037 1.164.047 3.61.047h1.08c2.446 0 2.822-.01 3.61-.047.788-.036 1.215-.15 1.503-.262.377-.147.645-.323.925-.603.28-.28.456-.548.603-.925.112-.288.226-.715.262-1.503.037-.788.047-1.164.047-3.61v-1.08c0-2.446-.01-2.822-.047-3.61-.036-.788-.15-1.215-.262-1.503-.147-.377-.323-.645-.603-.925-.28-.28-.548-.456-.925-.603-.288-.112-.715-.226-1.503-.262-.788-.037-1.164-.047-3.61-.047zm2.484 9.176a4.34 4.34 0 00-6.19-6.19 4.34 4.34 0 006.19 6.19zm0-1.838a2.535 2.535 0 00-3.59-3.565 2.535 2.535 0 003.59 3.565zm2.846-5.87a1.084 1.084 0 100 2.168 1.084 1.084 0 000-2.168z" clipRule="evenodd" /></svg>
                    </div>
                </div> */}
            </div>

             {/* COLLECTIONS */}
             <div>
                <h4 className="font-(--font-merriweather) font-bold text-lg mb-6 text-(--color-cream-50)">Collections</h4>
                <ul className="space-y-4 font-(--font-inter) text-gray-400 text-sm">
                    <li><Link href="/category/sofas" className="hover:text-(--color-cognac-default) transition-colors">Sofas & Sectionals</Link></li>
                    <li><Link href="/category/bedroom" className="hover:text-(--color-cognac-default) transition-colors">Luxury Beds</Link></li>
                    <li><Link href="/category/dining" className="hover:text-(--color-cognac-default) transition-colors">Dining Series</Link></li>
                    <li><Link href="/category/recliners" className="hover:text-(--color-cognac-default) transition-colors">Recliners</Link></li>
                    <li><Link href="/category/chairs" className="hover:text-(--color-cognac-default) transition-colors">Accent Chairs</Link></li>
                </ul>
             </div>

             {/* CONTACT */}
             <div>
                <h4 className="font-(--font-merriweather) font-bold text-lg mb-6 text-(--color-cream-50)">Contact Us</h4>
                <ul className="space-y-4 font-(--font-inter) text-gray-400 text-sm">
                    <li>
                        <a 
                            href="https://maps.app.goo.gl/boe42HYCxibbPqhH7?g_st=aw" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            Sadiq Uqba Masjid Road, opp. Masjid E Sadiq, Ashwath Nagar, Bengaluru, Karnataka 560077
                        </a>
                    </li>
                    {/* <li>+91 98765 43210</li> */}
                    <li>
                        <a 
                            href="mailto:furnituresmak@gmail.com"
                            className="hover:text-white transition-colors"
                        >
                            furnituresmak@gmail.com
                        </a>
                    </li>
                </ul>
             </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-(--font-inter) text-xs text-gray-500">
                © {currentYear} MAK Furnitures. All rights reserved.
            </p>
             {/* <div className="flex gap-6 text-xs text-gray-500 font-(--font-inter)">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
             </div> */}
        </div>

      </div>
    </footer>
  );
}
