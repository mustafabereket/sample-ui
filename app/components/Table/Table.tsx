"use client";
import React, { useState, useEffect } from "react";
import styles from "./Table.module.scss";
import { quotes } from "@/app/data/mockData";
import Image from "next/image";
import { Drawer } from "@geist-ui/core";
import RatingIcon from "../../../public/ratings-icon.svg";
import FileIcon from "../../../public/file-icon.svg";
import LabelQuote from "../ui/LabelQuote/LabelQuote";
import InfoIcon from "../../../public/info-icon.svg";
import CheckIcon from "../../../public/check-icon.svg";
import CloseIcon from "../../../public/close-icon.svg";
import DrawerContent from "../DrawerContent/DrawerContent";
import CavelaRecommended from "../CavelaRecommended/CavelaRecommended";
import Button from "../ui/Button/Button";
import Heading from "../ui/Heading/Heading";
import { SupplierPayload } from "../../types";

const Table = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState();

  const [recommended, setRecommended] = useState();
  const [others, setOthers] = useState([]);

  const categorizeItems = () => {
    const recs = [];
    const othersArr = [];
    quotes.forEach((quote) => {
      console.log(quote);
      if (quote.recommended) {
        recs.push(quote);
      } else {
        othersArr.push(quote);
      }
    });
    setOthers(othersArr);
    // @ts-ignore
    setRecommended(recs);
  };

  useEffect(() => {
    categorizeItems();
  }, []);

  const renderRows = (quote: SupplierPayload) => (
    <div
      className={styles.tableRow}
      key={quote.id}
      onClick={() => {
        // @ts-ignore
        setSelectedRow(quote);
        setOpen(true);
      }}
    >
      <div className={styles.rowCell}>
        <span className={styles.cellLabel}>Supplier</span>
        <span className={styles.cellValue}>
          <b>{quote.supplier.supplier_cloak}</b>
        </span>
      </div>

      <div className={styles.rowCell}>
        <span className={styles.cellLabel}>Variant</span>
        <span className={styles.cellValue}>
          {quote.product_quotes?.[0].product_name}
        </span>
      </div>

      <div className={styles.rowCell}>
        <span className={styles.cellLabel}>Unit Price</span>
        <span className={styles.cellValue}>
          ${quote.product_quotes?.[0].exw_unit_price_marked_up}
        </span>
      </div>

      <div className={styles.rowCell}>
        <span className={styles.cellLabel}>Quantity</span>
        <span className={styles.cellValue}>{quote.quantity}</span>
      </div>

      <div className={styles.rowCell}>
        <span className={styles.cellLabel}>Production Time</span>
        <span className={styles.cellValue}>
          {quote?.product_quotes?.[0].production_time_days} Days
        </span>
      </div>

      <div className={styles.rowCell}>
        <span className={styles.cellLabel}>Ratings</span>
        <span className={styles.cellValue}>
          {quote?.supplier?.average_score}{" "}
          <Image src={RatingIcon} alt="star review" />
        </span>
      </div>

      <div className={styles.rowCell}>
        <span className={styles.cellLabel}>Cavela Review</span>
        <span className={styles.cellValue}>
          {quote.recommended ? <LabelQuote type="best-value" /> : "N/A"}
        </span>
      </div>

      <div className={styles.rowCell}>
        <span className={styles.cellLabel}>Files</span>
        <span className={styles.cellValue}>
          {quote?.product_quotes?.[0]?.files?.length}{" "}
          <Image src={FileIcon} alt="file icon" />
        </span>
      </div>

      <div className={styles.rowCell}>
        <span className={styles.cellLabel}>Status</span>
        <span className={styles.cellValue}>Not purchased</span>
      </div>
    </div>
  );

  return (
    <div className={styles.tableContainer}>
      <div className={styles.quotesTable}>
        <div className={styles.headerRow}>
          <div className={styles.headerCell}></div>
          <div className={styles.headerCell}>
            VARIANT <Image src={InfoIcon} alt="info icon" />
          </div>
          <div className={styles.headerCell}>
            UNIT PRICE <Image src={InfoIcon} alt="info icon" />
          </div>
          <div className={styles.headerCell}>QUANTITY</div>
          <div className={styles.headerCell}>
            PRODUCTION TIME <Image src={InfoIcon} alt="info icon" />
          </div>
          <div className={styles.headerCell}>
            RATINGS <Image src={InfoIcon} alt="info icon" />
          </div>
          <div className={styles.headerCell}>
            CAVELA REVIEW <Image src={InfoIcon} alt="info icon" />
          </div>
          <div className={styles.headerCell}>FILES</div>
          <div className={styles.headerCell}>STATUS</div>
        </div>

        <div className={styles.tableBody}>
          {recommended ? (
            <CavelaRecommended customStyle={{ padding: "16px 0 0 0" }}>
              {
                // @ts-ignore

                recommended.map((quote) => renderRows(quote))
              }
            </CavelaRecommended>
          ) : null}
          {others.map((quote) => renderRows(quote))}
        </div>
      </div>

      <Drawer height="100vh" onClose={() => setOpen(false)} visible={open}>
        <Drawer.Title>
          <div className={styles.drawerHeader}>
            <Heading
              text={
                // @ts-ignore
                selectedRow?.supplier?.supplier_cloak
              }
              size={18}
            />
            <div className={styles.closeButton} onClick={() => setOpen(false)}>
              <Image src={CloseIcon} alt="close icon" />
            </div>
          </div>
        </Drawer.Title>
        <Drawer.Content>
          {
            // @ts-ignore
            selectedRow?.recommended ? (
              <CavelaRecommended>
                <DrawerContent
                  item={selectedRow}
                  // @ts-ignore
                  action={() => setOpen(false)}
                />
              </CavelaRecommended>
            ) : (
              <DrawerContent
                item={selectedRow}
                // @ts-ignore
                action={() => setOpen(false)}
              />
            )
          }
          <div className={styles.drawerButtonGroup}>
            <Button
              text="Close"
              type="secondary"
              action={() => setOpen(false)}
              icon={<Image src={CloseIcon} alt="close icon" />}
            />
            <Button
              text="Submit Purchase"
              type="primary"
              action={() => setOpen(false)}
              icon={<Image src={CheckIcon} alt="check icon" />}
            />
          </div>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};

export default Table;
