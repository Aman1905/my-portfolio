import React from "react";
import { motion, AnimatePresence } from 'framer-motion'

export default function MapHoverCard({ x, y, stateName, places }) {
    return (
        <AnimatePresence>
            {stateName && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 22 }}
                    className="pointer-events-none fixed z-50"
                    style={{ left: x + 16, top: y + 16 }}
                >
                    <div className="rounded-2xl shadow-soft border border-gray-200 bg-white px-4 py-3 w-64">
                        <div className="text-sm font-semibold">{stateName}</div>
                        {Array.isArray(places) && places.length > 0 ? (
                            <ul className="mt-1 text-xs text-gray-600 list-disc list-inside space-y-0.5">
                                {places.map((p) => (
                                <li key={p}>{p}</li>
                                ))}
                            </ul>
                        ):(
                            <p className="mt-1 text-xs text-gray-500">No trips here (yet)!</p>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}