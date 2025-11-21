import React, { useRef, useState } from "react";

// RealPhoto component allows choosing a real couple photo and displays it elegantly
// Accepts optional src prop. If not provided, renders an uploader.

function RealPhoto({ src }) {
  const [preview, setPreview] = useState(src || "");
  const inputRef = useRef(null);

  const onFile = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    onFile(file);
  };

  const onSelect = (e) => {
    const file = e.target.files?.[0];
    onFile(file);
  };

  return (
    <section className="relative py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-rose-900 text-center mb-6">Nossa imagem</h2>
        <div className="relative grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Left: Elegant frame for the real photo */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-rose-200/60 shadow-2xl bg-rose-50">
            {preview ? (
              <img
                src={preview}
                alt="Nossa foto"
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                onClick={() => inputRef.current?.click()}
                onDrop={onDrop}
                onDragOver={(e) => e.preventDefault()}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-rose-700/80 cursor-pointer"
              >
                <span className="text-sm">Arraste sua foto aqui ou toque para escolher</span>
                <span className="text-xs text-rose-500">Formatos comuns: JPG, PNG</span>
              </div>
            )}
            {/* soft vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-rose-100/20" aria-hidden />
          </div>

          {/* Right: Abstract gradient cover kept as artistic complement */}
          <div className="hidden lg:block">
            <div className="relative h-full rounded-3xl overflow-hidden ring-1 ring-rose-200/50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-rose-100 to-white" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-300 rounded-full blur-3xl opacity-70" />
              <div className="absolute bottom-20 inset-x-0 h-40 bg-gradient-to-t from-rose-200/60 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent_60%)] mix-blend-overlay" />
            </div>
          </div>
        </div>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onSelect} />
      </div>
    </section>
  );
}

export default RealPhoto;
