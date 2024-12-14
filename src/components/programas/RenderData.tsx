import { useStore } from '@nanostores/react';
import { filterStore } from '~/stores/filterStore';
import { PROGRAMAS_PREGRADO, PROGRAMAS_POSGRADO } from '~/const/programas';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';

interface Programa {
  image: string;
  semestres: number;
  sede: string;
  valor: string;
  name: string;
  link: string;
}

interface Props {
  bookIcon: React.ReactNode;
  geoIcon: React.ReactNode;
}

const RenderData: React.FC<Props> = ({ bookIcon, geoIcon }) => {
  const $filterStore = useStore(filterStore) as 'pregrado' | 'posgrado';

  let data: Programa[] = [];
  if ($filterStore === 'pregrado') {
    data = PROGRAMAS_PREGRADO;
  } else {
    data = PROGRAMAS_POSGRADO;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
      <AnimatePresence mode="wait">
        {data.map((programa, i) => (
          <motion.div
            key={`${$filterStore}-${i}`} // Clave única para reiniciar la animación al cambiar el filtro
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }} // Duración del fade
          >
            <Card data={programa} icons={{bookIcon, geoIcon}} index={i} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default RenderData;
