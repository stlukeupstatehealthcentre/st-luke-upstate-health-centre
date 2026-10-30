import { Container } from "@/components/shared/Container";
import { FooterLinks } from "@/sections/Footer/FooterLinks";
import { FooterContact } from "@/sections/Footer/FooterContact";
import { FooterMap } from "@/sections/Footer/FooterMap";
import { site } from "@/data/site";

/**
 * Site footer: links · contact details · embedded map.
 * The social block is self-hiding — it only renders when site.social is non-empty.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary text-white">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <FooterLinks />
          <FooterContact />
          <FooterMap />
        </div>

        {site.social.length > 0 && (
          <div className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
            {site.social.map((url) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
              >
                {url}
              </a>
            ))}
          </div>
        )}
      </Container>

      <div className="border-t border-white/20">
        <Container className="flex flex-col items-center justify-between gap-2 py-4 text-center text-sm text-white/70 sm:flex-row">
          <p>
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
          <p className="italic">{site.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
