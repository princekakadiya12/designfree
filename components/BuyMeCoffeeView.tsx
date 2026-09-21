'use client';

export const BuyMeCoffeeView = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 py-12 animate-in fade-in duration-500">
      <div className="max-w-lg w-full text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#2d2926]">Support My Work</h1>
        <p className="text-sm text-[#78716c] mt-2">If you find these resources helpful, consider supporting me.</p>
      </div>

      <div className="max-w-lg w-full bg-white border border-[#e7e5e0] rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.06)] text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/qr_code.png" 
          alt="UPI QR Code" 
          className="w-56 h-56 mx-auto rounded-xl object-cover" 
          loading="lazy" 
        />
        
        <div className="mt-6">
          <span className="font-mono text-sm bg-[#f5f1ec] text-[#2d2926] px-4 py-2 rounded-lg inline-block">
            princekakadiya20-1@okicici
          </span>
          <p className="text-xs text-[#a8a29e] mt-2">Scan with any UPI app</p>
        </div>
      </div>

      <div className="mt-6 max-w-lg text-center">
        <p className="text-xs text-[#a8a29e]">Every contribution fuels new projects and resources. Thank you!</p>
      </div>
    </div>
  );
};
