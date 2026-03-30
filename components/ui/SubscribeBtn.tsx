'use client'

import { motion } from 'framer-motion'

const SubscribeBtn = () => {
  return (
    <motion.button
      type='button'
      className="rounded-lg text-on-surface px-4 py-2 text-sm font-medium outline-1 transition hover:bg-on-surface/60 hover:text-on-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-focus"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
        Subscribe For Growth Tips
    </motion.button>
  )
}

export default SubscribeBtn
