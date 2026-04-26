import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PureRoots Organics — Vermicompost & Organic Manure Exporters',
  description: 'Premium vermicompost and organic manure supplier. Bulk supply available across India and for export.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div className="logo">Pure<span>Roots</span> Organics</div>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#why">Why Us</a></li>
            <li><a href="#enquiry">Get Quote</a></li>
          </ul>
        </nav>
        {children}
        <footer>
          <strong>PureRoots Organics</strong> — Organic Manure & Vermicompost Exporters<br />
          <span>Contact us: +91 XXXXX XXXXX | info@pureroots.in</span>
        </footer>
      </body>
    </html>
  );
}