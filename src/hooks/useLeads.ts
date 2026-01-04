import { useState, useEffect } from 'react';
import type { Lead } from '../types';
import { MOCK_LEADS } from '../data/mockLeads';

export function useLeads() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const apiUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
                console.log("Attempting to fetch from:", apiUrl); // Debug log

                // If no API URL is provided, use Mock Data
                if (!apiUrl) {
                    console.log("No API URL found, using Mock Data");
                    setTimeout(() => {
                        setLeads(MOCK_LEADS);
                        setLoading(false);
                    }, 1000);
                    return;
                }

                // Fetch from Google Apps Script
                const response = await fetch(apiUrl);
                if (!response.ok) throw new Error('Network response was not ok');

                const data = await response.json();
                if (data.error) throw new Error(data.error);

                setLeads(data);
            } catch (error) {
                console.error("Failed to fetch leads:", error);
                alert("Failed to load data from Google Sheets. Check console. Using Mock Data.");
                setLeads(MOCK_LEADS);
            } finally {
                setLoading(false);
            }
        };

        fetchLeads();
    }, []);

    return { leads, loading };
}
