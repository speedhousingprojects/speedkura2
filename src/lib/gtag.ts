/**
 * Google Ads Conversion Tracking Utility
 * Conversion Event: Outbound click / Lead form submission
 */
export const trackConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-17602634500/o0S6CJKtnOscEITGy8lB',
    });
    console.log('[GOOGLE ADS CONVERSION FIRED]: AW-17602634500/o0S6CJKtnOscEITGy8lB');
  }
};
