import React, { useRef, useEffect } from 'react';

interface CardProps {
  data: {
    image: string;
    semestres: number;
    sede: string;
    valor: string;
    name: string;
    link: string;
  };
  index: number;
  icons: {
    bookIcon: React.ReactNode;
    geoIcon: React.ReactNode;
  };
}

const Card: React.FC<CardProps> = (props) => {
  const { image, semestres, sede, valor, name, link } = props.data;
  const { index } = props;
  const { bookIcon, geoIcon } = props.icons;
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function adjustCardHeights() {
      const card = cardRef.current;
      if (!card) return;

      card.style.maxHeight = '';

      const button = card.querySelector<HTMLAnchorElement>('.program-card__button');
      if (!button) return;

      const buttonHeight = button.offsetHeight;

      // Get the available height of the card excluding the button
      const cardComputedStyle = window.getComputedStyle(card);
      const paddingTop = parseFloat(cardComputedStyle.paddingTop);
      const paddingBottom = parseFloat(cardComputedStyle.paddingBottom);

      const totalPadding = paddingTop + paddingBottom;
      const finalHeight = card.scrollHeight - (buttonHeight + totalPadding + 32);

      card.style.maxHeight = `${finalHeight}px`;
    }

    function shouldAdjustHeight(): boolean {
      return window.innerWidth > 768; // Change 768 to your desired mobile breakpoint
    }

    if (shouldAdjustHeight()) {
      adjustCardHeights();

      // Adjust heights on window resize (only if not in mobile)
      const resizeHandler = () => {
        if (shouldAdjustHeight()) {
          requestAnimationFrame(adjustCardHeights);
        }
      };

      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    }
  }, []); // Empty dependency array ensures this runs once after mounting

  return (
    <div
      ref={cardRef}
      key={index}
      className="program-card relative bg-white rounded-xl overflow-hidden border border-gray-300 flex flex-col h-auto group"
    >
      <div className="min-h-56 h-full bg-gray-300 max-h-56">
        <img
          src={image}
          alt={name}
          className="w-full object-cover object-center md:group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow bg-white transition-all duration-300 md:group-hover:-translate-y-20">
        <div className="space-y-3 flex-1">
          <div className="flex justify-between">
            <span className="text-zinc-700 flex gap-1 items-center justify-center">
              {bookIcon}
              {semestres} Semestres
            </span>
            <div className="flex gap-1 items-center justify-center text-zinc-700">
              {geoIcon}
              {sede}
            </div>
          </div>
          <h2 className="text-xl font-bold font-bricolage">{name}</h2>
          <p>{valor}</p>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className="program-card__button block hover:saturate-50 transition-all px-3 md:px-5 md:py-2 py-2 bg-primary-900 rounded-xl font-semibold font-bricolage max-w-fit text-white mt-4"
        >
          Ver Más
        </a>
      </div>
    </div>
  );
};

export default Card;
