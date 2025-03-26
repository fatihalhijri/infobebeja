import Hero from "@/components/Hero";
import React from "react";

const ItemDrill = [
  "Shale Inhibitor (PEA)",
  "Clay Stabilizer (PDMAC)",
  "XCD Polymer API 13A",
  "PAC LV API 13A",
  "PAC HV API 13A",
  "STARCH API 13A",
  "PHPA Powder (Anionic Polymer)",
  "PHPA Emulsion/Liquid",
  "Biocide (Glut 50, CIT/MIT 14)",
  "Mutual Solvent (EGMBE)",
];
const ItemCement = [
  "Silica Flour",
  "Retarder",
  "Accelerator",
  "Gas Block Agent",
  "Defoamer",
  "Dispersant Agent",
  "Biocide",
  "Acid Corrosion Inhibitor",
  "Light Density Agent",
  "Foam Booster",
];
const ItemProduct = [
  "Pour Point Depressant (Poly Maleic Anhydride)",
  "Corrosion Inhibitor (Imidazoline)",
  "Scale Inhibitor (ATMP, BHMT, PBTC, HEDP, HPMA, DTPMA)",
  "H2S Scavenger (MEA Triazine 78%/ EDDM)",
  "Glycol (MEG, DEG, TEG, PGI, DPG)",
  "Biocide (THPS 75, Glut 50, CIT/MIT 14, BKC 80)",
  "Morpholine ex. Huntsman",
  "DETA ex. Huntsman",
  "MEA ex. Petronas",
  "Xylene",
  "Solvent Tn",
  "IPA",
  "EGMBE",
];
const ItemWaste = [
  "PDMAC (Poly Dadmac Powder and Liquid)",
  "PAM (Poly Acrylamide, Anionic, Cationic and Non Ionic)",
  "ACH (Alumunium Chloro Hydrate)",
  "PAC (Poly Alumunium Chloride)",
  "BIO ENZIM (BAKTERI PENGURAI LIMBAH and NUTRIENT)",
  "SCALE INHIBITOR (ATMP, BHMT, HPMA, HEDP, PBTC DTPMPA, SPA)",
  "MORPHOLINE",
  "RESIN TRILLITE(ANIONIC/CATIONIC)",
  "CAUSTIC SODA (Flake/Powder/Pearl)",
  "TCCA and Sodium Hypo",
  "BIOCIDE (DBNPA, THPS 75, CIT/MIT 14, GLUT 50, BKC 80)",
  "Ca(OH)2",
  "SODA ASH (Dense/Light)",
  "ANTIFOAM (Mineral Oil/Palm Oil/Silicone Based)",
  "HYDRAZINE Hydrate 99%",
  "HEXAMINE Powder",
  "CARBON ACTIVE",
];
const ItemChemical = [
  "C5 RESIN HHC-1288S - 25 KG BAGS",
  "C9-PR-120 - 25 KG BAGS",
  "DIBASIC ESTER (DBE) - 220 KG DRUM",
  "EPOXY RESIN ER-127 - 240 KG DRUM",
  "EPOXY RESIN ER-128 - 240 KG DRUM",
  "EPOXY RESIN KER 3001-X75 – 240 KG DRUM",
  "EPOXY HARDENER R-1085 - 200 KG DRUM",
  "EPOXY HARDENER R-1085 - 25 KG JERRYCAN",
  "EPOXY HARDENER R-3200 - 200KG DRUM",
  "EPOXY HARDENER R-6327 - 200 KG DRUM",
  "EPOXY RESIN KER3001-X-75 - 200 KG DRUM",
  "EPOXY RESIN SM828 - 240 KG DRUM",
  "GLASS BEADS 1.6RI BS6088B - 25 KG BAGS",
  "GLASS BEADS BS6088A - 25 KG BAGS",
  "GLASS BEADS BS6088B - 25 KG BAGS",
  "LS AGE - 180 KG DRUM",
  "MERGAL K10N - 30 KG PAIL",
  "POWDERMATE 542DG - 15 KG BAGS",
  "Q-CEL 5020 - 27.5 KG BOX",
  "SPHERIGLASS 3000ECP00 - 25 KG BAG",
  "TBHQ - 25 KG BAGS",
  "TITANIUM DIOXIDE JTCR539 - 25 KG BAGS",
  "TITANIUM DIOXIDE JTR739T - 25 KG BAGS",
  "TITANIUM DIOXIDE R2295 - 25 KG BAGS",
  "TITANIUM DIOXIDE R2295 - 25",
];

const page = () => {
  return (
    <div>
      <Hero img="/kimia-1.webp" judul="Produk" subJudul="produk" posisi="30%" />
      <div className="h-full lg:py-10 py-10 px-6 md:px-20 lg:px-36">
        <div className="pb-6 flex flex-col items-center justify-center ">
          <h3 className="lg:text-3xl md:text-2xl text-2xl uppercase lg:font-semibold font-medium text-center ">
            Produk List
          </h3>
          <hr className="border text-blue-400 rounded-full w-20 border-dashed " />
        </div>
        <div className="">
          <h3 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-blue-400 font-medium py-3">
            OIL and GAS Raw Material Products
          </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full gap-3">
            <div className="flex flex-col    ">
              <h4 className="xl:text-3xl lg:text-2xl md:text-xl text-lg italic text-black/60 font-semibold py-3">
                Drilling Chemicals:
              </h4>

              <ul className="list-none space-y-2">
                {ItemDrill.map((item, index) => (
                  <li
                    key={index}
                    className="text-base lg:text-xl md:text-lg font-light text-black/60"
                  >
                    <span className="font-medium">
                      {String.fromCharCode(65 + index)}.
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col   ">
              <h4 className="xl:text-3xl lg:text-2xl md:text-xl text-lg italic text-black/60 font-semibold py-3">
                Cementing Chemicals:
              </h4>

              <ul className="list-none space-y-2">
                {ItemCement.map((item, index) => (
                  <li
                    key={index}
                    className="text-base lg:text-xl md:text-lg font-light text-black/60"
                  >
                    <span className="font-medium">
                      {String.fromCharCode(65 + index)}.
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col   ">
              <h4 className="xl:text-3xl lg:text-2xl md:text-xl text-lg italic text-black/60 font-semibold py-3">
                Production Chemicals:
              </h4>

              <ul className="list-none space-y-2">
                {ItemProduct.map((item, index) => (
                  <li
                    key={index}
                    className="text-base lg:text-xl md:text-lg font-light text-black/60"
                  >
                    <span className="font-medium">
                      {String.fromCharCode(65 + index)}.
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="py-5">
          <h3 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-blue-400 font-medium py-3">
            WASTE & WATER TREATMENT Raw Material Products
          </h3>
          <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-3">
            <div className="flex flex-col    ">
              <h4 className="xl:text-3xl lg:text-2xl md:text-xl text-lg italic text-black/60 font-semibold py-3">
                Waste and Water Treatment:
              </h4>

              <ul className="list-none space-y-2">
                {ItemWaste.map((item, index) => (
                  <li
                    key={index}
                    className="text-base lg:text-xl md:text-lg font-light text-black/60"
                  >
                    <span className="font-medium">
                      {String.fromCharCode(65 + index)}.
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="py-5">
          <h3 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-blue-400 font-medium py-3">
            INDUSTRIAL CHEMICAL
          </h3>
          <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-3">
            <div className="flex flex-col    ">
              <h4 className="xl:text-3xl lg:text-2xl md:text-xl text-lg italic text-black/60 font-semibold py-3">
                INDUSTRIAL COATING Raw Material Products:
              </h4>

              <ul className="list-none space-y-2">
                {ItemChemical.map((item, index) => (
                  <li
                    key={index}
                    className="text-base lg:text-xl md:text-lg font-light text-black/60"
                  >
                    <span className="font-medium">
                      {String.fromCharCode(65 + index)}.
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
