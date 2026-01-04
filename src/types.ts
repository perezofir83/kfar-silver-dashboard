export type LeadStatus = 'חדש' | 'לא רלוונטי' | 'בטיפול' | 'הוזמן לפגישה' | 'מחכה למסמכים' | 'התקבל';

export interface Lead {
    id: string; // internal ID
    rowNumber: number; // For Google Sheets sync
    name: string; // Column A (example)
    phone: string; // Column B
    city: string; // Column C? based on "External from Ashkelon" rule
    grade: string; // Column D: 'ז', 'ח', 'ט', 'י'
    contactDate: string;
    timestamp: string; // Column A
    source: string;
    leadType: 'External' | 'Boarding' | 'Naale' | 'Aliyah'; // Assumed Column E or derived
    notes: string;
    status: LeadStatus; // Column H
}

export interface Goals {
    grade7: {
        external: number; // Target 140
        boarding: number; // Target 35
        total: number; // Target 175
    };
    grade8: {
        boarding: number; // Target 28 (increased from baseline)
    };
    grade9: {
        aliyah: number; // Target 15
        naale: number; // Target 20-23
    };
    grade10: {
        boarding: number; // Min 10
        naale: number; // Min 10
    };
    totalBoarding: number; // Target 290
}
