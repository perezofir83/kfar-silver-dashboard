import { useMemo } from 'react';
import type { Lead } from '../types';

export function useGoals(leads: Lead[]) {
    const goals = useMemo(() => {
        // Initial Targets
        const targets = {
            grade7: { external: 140, boarding: 35 },
            grade8: { boarding: 28 }, // Target total boarding? User said "Increase to 28 (add 10)". I'll assume target is 28 total.
            grade9: { aliyah: 15, naale: 23 }, // Naale 20-23, taking max
            grade10: { boarding: 10, naale: 10 },
            totalBoarding: 290
        };

        // Calculate accepted
        const accepted = leads.filter(l => l.status === 'התקבל');

        const acceptedCounts = {
            grade7: {
                external: accepted.filter(l => l.grade === 'ז' && l.leadType === 'External').length,
                boarding: accepted.filter(l => l.grade === 'ז' && l.leadType === 'Boarding').length,
            },
            grade8: {
                boarding: accepted.filter(l => l.grade === 'ח' && l.leadType === 'Boarding').length,
            },
            grade9: {
                aliyah: accepted.filter(l => l.grade === 'ט' && l.leadType === 'Aliyah').length,
                naale: accepted.filter(l => l.grade === 'ט' && l.leadType === 'Naale').length,
            },
            grade10: {
                boarding: accepted.filter(l => l.grade === 'י' && l.leadType === 'Boarding').length,
                naale: accepted.filter(l => l.grade === 'י' && l.leadType === 'Naale').length,
            },
            totalBoarding: accepted.filter(l => l.leadType === 'Boarding' || l.leadType === 'Naale' || l.leadType === 'Aliyah').length
            // Assuming Naale/Aliyah count as Boarding for total? Usually yes.
        };



        // Calculate remaining
        const remaining = {
            grade7: {
                external: Math.max(0, targets.grade7.external - acceptedCounts.grade7.external),
                boarding: Math.max(0, targets.grade7.boarding - acceptedCounts.grade7.boarding),
            },
            grade8: {
                boarding: Math.max(0, targets.grade8.boarding - acceptedCounts.grade8.boarding),
            },
            grade9: {
                aliyah: Math.max(0, targets.grade9.aliyah - acceptedCounts.grade9.aliyah),
                naale: Math.max(0, targets.grade9.naale - acceptedCounts.grade9.naale),
            },
            grade10: {
                boarding: Math.max(0, targets.grade10.boarding - acceptedCounts.grade10.boarding),
                naale: Math.max(0, targets.grade10.naale - acceptedCounts.grade10.naale),
            },
            totalBoarding: Math.max(0, targets.totalBoarding - acceptedCounts.totalBoarding)
            // Note: User said "Final Boarding Target: 290". This likely includes existing students + new?
            // Or 290 NEW students? 290 is a huge number for just new. 
            // Likely "Total Boarding Students" target. 
            // If table tracks NEW leads, I can only subtract NEW accepted leads.
            // I don't know the base current number. 
            // I will display it as "Boarding Goal: 290" and maybe "New Accepted: X". 
            // If the goal is TOTAL population, I need "Current Total" which is missing.
            // I'll assume for now it tracks NEW additions towards that goal, or I just start with target and decrement.
            // I'll leave it as "Target - Accepted" for now.
        };

        return { targets, accepted: acceptedCounts, remaining, totalAccepted: accepted.length };
    }, [leads]);

    return goals;
}
