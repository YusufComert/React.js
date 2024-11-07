import React from "react";
import {} from "../css/Card.css";

interface PricingTableProps {
  title: string;
  price: string;
  features: string[];
  delFeatures: string[];
}

const PricingTable: React.FC<PricingTableProps> = ({
  title,
  price,
  features,
  delFeatures,
}) => {
  return (
    <div className="pricing-table gprice-single">
      <div className="head">
        <h4 className="title">{title}</h4>
      </div>
      <div className="content">
        <div className="price">
          <h1>{price}</h1>
        </div>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          {delFeatures.map((feature, index) => (
            <li key={index}>
              <del>{feature}</del>
            </li>
          ))}
        </ul>
        <div className="sign-up">
          <a href="#" className="btn bordered radius">
            SATIN AL
          </a>
        </div>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <div className="wrapper">
      <PricingTable
        title="Basic"
        price="$19"
        features={[
          "5 GB Ram",
          "40GB SSD Cloud Storage",
          "Month Subscription",
          "Responsive Framework",
        ]}
        delFeatures={["Monthly Billing Software", "1 Free Website"]}
      />
      <PricingTable
        title="Standard"
        price="$29"
        features={[
          "5 GB Ram",
          "40GB SSD Cloud Storage",
          "Month Subscription",
          "Responsive Framework",
          "Monthly Billing Software",
        ]}
        delFeatures={["1 Free Website"]}
      />
      <PricingTable
        title="Premium"
        price="$39"
        features={[
          "5 GB Ram",
          "40GB SSD Cloud Storage",
          "Month Subscription",
          "Responsive Framework",
          "Monthly Billing Software",
          "1 Free Website",
        ]}
        delFeatures={[]}
      />
    </div>
  );
};

export default Pricing;
