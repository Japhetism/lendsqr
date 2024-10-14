import { useState } from "react";
import Layout from "../../../component/layout";
import "./details.scss";
import { UsersIcon } from "../../../assets/svg/usersIcon";

interface Tab {
    label: string;
    content: JSX.Element;
}

const UserDetails = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs: Tab[] = [
        { label: 'General Details', content: <div>General Details Content</div> },
        { label: 'Documents', content: <div>Documents Content</div> },
        { label: 'Bank Details', content: <div>Bank Details Content</div> },
        { label: "Loans", content: <div>Loans Content</div> },
        { label: "Savings", content: <div>Savings Content</div> },
        { label: "App ans System", content: <div>App and System Content</div> }
    ];
    
    return (
        <Layout title="User Details">
            <div className="tab-container">
                <div className="tab-information">
                    <div className="tab-information__icon-container tab-information__info-section">
                        <div className="tab-information__icon-container__icon">
                            <UsersIcon />
                        </div>
                        <div className="tab-information__icon-container__user-details">
                            <p className="tab-information__icon-container__user-details__name">Grace Effiom</p>
                            <small className="tab-information__icon-container__user-details__info">LSQFf587g90</small>
                        </div>
                    </div>
                    <div className="tab-information__info-section">
                        <p className="tab-information__icon-container__user-details__info">User's Tier</p>
                        <small>***</small>
                    </div>
                    <div>
                        <p className="tab-information__icon-container__user-details__name">₦200,000.00</p>
                        <small className="tab-information__icon-container__user-details__info">9912345678/Providus Bank</small>
                    </div>
                </div>
                <div className="tabs">
                    <div className="tabHeaders">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`tab ${activeTab === index ? "active" : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
      
                </div>
            </div>
        </Layout>
    )
}

export default UserDetails;