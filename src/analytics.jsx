
import ReactGA4 from 'react-ga4';

const InitializeGoogleAnalytics = () => {
    ReactGA4.initialize("G-KEV0Q9Z80R");

    console.log("GA initialize")
};

const TrackGoogleAnalitycsEvent = (category, action , label  ) => {
    console.log("GA event:", category, ":", action, ":", label);

    ReactGA4.event({
        category: category,
        action: action,
        label: label
    })
}

export default InitializeGoogleAnalytics;
export {
    InitializeGoogleAnalytics,
    TrackGoogleAnalitycsEvent
}