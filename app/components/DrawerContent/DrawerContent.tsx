import React from "react";
import styles from "./DrawerContent.module.scss";
import Image from "next/image";
import Heading from "../ui/Heading/Heading";
import InfoIcon from "../../../public/info-icon.svg";
import RatingsIcon from "./../../../public/ratings-icon.svg";
import FileIcon from "./../../../public/file-icon.svg";
import { ProductQuote, SupplierPayload } from "../../types";
import LabelQuote from "../ui/LabelQuote/LabelQuote";

interface DrawerContentProps {
  item: SupplierPayload;
}

const DrawerContent = ({ item }: DrawerContentProps) => {
  console.log(item);
  const quote = item?.product_quotes?.[0] || ({} as unknown as ProductQuote);

  return (
    <div className={styles.drawerContent}>
      <div className={styles.drawerRow}>
        <div className="secondaryText">Status</div>
        <div className={styles.rowInput}>Not purchased</div>
      </div>
      <Heading text="Product" size={18} />
      <div className={styles.drawerRow}>
        <div className="secondaryText">
          Variant <Image src={InfoIcon} alt="info icon" />
        </div>
        <div className={styles.rowInput}>{item?.supplier?.supplier_cloak}</div>
      </div>
      <div className={styles.drawerRow}>
        <div className="secondaryText">
          EXW Unit Price <Image src={InfoIcon} alt="info icon" />
        </div>
        <div className={styles.rowInput}>${quote.exw_unit_price_marked_up}</div>
      </div>
      <div className={styles.drawerRow}>
        <div className="secondaryText">
          DDP Unit Price <Image src={InfoIcon} alt="info icon" />
        </div>
        <div className={styles.rowInput}>${quote.ddp_unit_price_marked_up}</div>
      </div>
      <div className={styles.drawerRow}>
        <div className="secondaryText">Quantity</div>
        <div className={styles.rowInput}>{item?.quantity}</div>
      </div>
      <div className={styles.drawerRow}>
        <div className="secondaryText">
          Production Time <Image src={InfoIcon} alt="info icon" />
        </div>
        <div className={styles.rowInput}>{quote.production_time_days} Days</div>
      </div>
      <div className={styles.drawerRow}>
        <div className="secondaryText">
          Shipping Time <Image src={InfoIcon} alt="info icon" />
        </div>
        <div className={styles.rowInput}>{quote.shipping_time_days} Days</div>
      </div>
      <div className={styles.drawerRow}>
        <div className="secondaryText">
          Shipping Method <Image src={InfoIcon} alt="info icon" />
        </div>
        <div className={styles.rowInput}>Sea</div>
      </div>
      <div className={styles.drawerRow}>
        <div className="secondaryText">Payment Terms</div>
        <div className={styles.rowInput}>
          {item?.deposit_percentage ? (
            <>
              {item?.deposit_percentage * 100}% upfront,{" "}
              {100 - item?.deposit_percentage * 100}% after reception
            </>
          ) : (
            "N/A"
          )}
        </div>
      </div>
      {/* Sample Section */}
      <Heading text="Sample" size={18} />
      <div className={styles.drawerRow}>
        <div className="secondaryText">Sample Cost</div>
        <div className={styles.rowInput}>${quote.sample_cost_marked_up}</div>
      </div>
      <div className={styles.drawerRow}>
        <div className="secondaryText">Shipping Cost</div>
        <div className={styles.rowInput}>
          ${quote.sample_shipping_cost_marked_up}
        </div>
      </div>
      <div className={styles.drawerRow}>
        <div className="secondaryText">
          Production Time <Image src={InfoIcon} alt="info icon" />
        </div>
        <div className={styles.rowInput}>
          {quote.sample_production_time_days} Days
        </div>
      </div>
      <div className={styles.drawerRow}>
        <div className="secondaryText">
          Shipping Time <Image src={InfoIcon} alt="info icon" />
        </div>
        <div className={styles.rowInput}>
          {quote.sample_lead_time_days_with_shipping} Days
        </div>
      </div>
      <Heading text="Supplier Details" size={18} />
      <div className={styles.drawerRow}>
        <div className="secondaryText">
          Ratings <Image src={InfoIcon} alt="info icon" />
        </div>
        <div className={styles.rowInput}>
          {item?.supplier?.average_score}{" "}
          <Image src={RatingsIcon} alt="ratings icon" />
        </div>
      </div>
      <div className={styles.drawerRow}>
        <div className="secondaryText">
          Review <Image src={InfoIcon} alt="info icon" />
        </div>
        <div className={styles.rowInput}>
          {item?.product_quotes?.[0]
            ? item?.product_quotes?.[0]?.tags.map((tag, index) => {
                console.log(tag);
                return (
                  <LabelQuote
                    // @ts-ignore
                    type={tag}
                    key={index}
                  />
                );
              })
            : "N/A"}
        </div>
      </div>
      <div className={styles.drawerRow}>
        <div className="secondaryText">Notes</div>
        <div className={styles.rowInput}>{item?.client_notes}</div>
      </div>
      {/* References Section */}
      <Heading text="References" size={18} />
      <div className={styles.drawerRow}>
        <div className="secondaryText">Files</div>
        <div className={styles.rowInput}>
          {quote?.files?.length ? (
            quote?.files?.map((file, index) => {
              return (
                <div
                  className={styles.files}
                  key={index}
                  style={item?.recommended ? { backgroundColor: "white" } : {}}
                >
                  <div>
                    <Image src={FileIcon} alt="file icon" />
                    {file.name}
                  </div>
                  <div>{file.description}</div>
                </div>
              );
            })
          ) : (
            <div>No file content found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrawerContent;
