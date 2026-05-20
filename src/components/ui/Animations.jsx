import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

export function FadeIn({ children, className, delay = 0, direction = 'up', blur = true, ...props }) {
  const directionOffset = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  const { x, y } = directionOffset[direction] || directionOffset.up;

  return (
    <motion.div
      initial={{ opacity: 0, y, x, filter: blur ? 'blur(8px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

export function StaggerGroup({ children, className, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={staggerParent}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, as = 'div', ...props }) {
  const Component = motion[as] || motion.div;
  return (
    <Component variants={staggerChild} className={className} {...props}>
      {children}
    </Component>
  );
}

export function CountUp({ target, duration = 2000, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const numericStr = target.toString().replace(/[^0-9.]/g, '');
    const numericTarget = parseFloat(numericStr);
    if (isNaN(numericTarget)) {
      setDisplay(target);
      return;
    }

    const prefix = target.toString().match(/^[^0-9]*/)?.[0] || '';
    const suffix = target.toString().match(/[^0-9.]*$/)?.[0] || '';
    const hasDecimal = numericStr.includes('.');
    const decimalPlaces = hasDecimal ? numericStr.split('.')[1].length : 0;

    const start = performance.now();
    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = eased * numericTarget;
      setDisplay(`${prefix}${hasDecimal ? current.toFixed(decimalPlaces) : Math.round(current)}${suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref} className={className}>{display}</span>;
}

export function Parallax({ children, className, speed = 0.15, ...props }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-speed * 100, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
