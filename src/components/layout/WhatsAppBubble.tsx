export function WhatsAppBubble() {
  const text = encodeURIComponent('您好，我想咨询南洋本草的产品，请问可以帮我吗？')
  return (
    <a
      href={`https://wa.me/60123456789?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp 联系客服"
      className="fixed bottom-20 md:bottom-6 right-4 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-4 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current shrink-0" aria-hidden>
        <path d="M20.52 3.48A11.85 11.85 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6L0 24l6.18-1.62A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 21.8a9.77 9.77 0 0 1-5-1.38l-.36-.21-3.67.96.98-3.57-.23-.37A9.77 9.77 0 1 1 12 21.8zm5.6-7.32c-.3-.15-1.8-.89-2.08-.99s-.48-.15-.69.15-.79.99-.97 1.2-.36.22-.66.07a8.05 8.05 0 0 1-2.37-1.47 8.87 8.87 0 0 1-1.64-2.04c-.17-.3 0-.45.13-.6s.3-.36.45-.54.2-.3.3-.5.05-.37-.02-.52-.69-1.66-.94-2.28c-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.52.08-.8.37s-1.06 1.04-1.06 2.53 1.09 2.94 1.24 3.14 2.14 3.27 5.18 4.59c.72.31 1.29.5 1.73.63.73.23 1.4.2 1.92.12.59-.09 1.8-.74 2.06-1.46s.26-1.33.18-1.46-.27-.2-.57-.34z" />
      </svg>
      <span className="text-sm font-medium whitespace-nowrap">联系客服</span>
    </a>
  )
}
