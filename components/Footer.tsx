export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-dark-lighter mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <p className="text-light-muted text-sm">
          © {new Date().getFullYear()} Zabeth Botanical House of Beauty. All rights reserved.
        </p>
      </div>
    </footer>
  )
}