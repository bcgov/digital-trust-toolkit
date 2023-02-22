# BC Petroleum and Natural Gas Title Credential (Tenure)

# 1. Primary Document

## 1.1. Introduction

This document articulates the title credential for natural gas tenure in British Columbia as per [the Petroleum and Natural Gas Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01).

The development of this documentation follows the governance framework created by the [Trust over IP Foundation (ToIP)](https://trustoverip.org/) [Governance Metamodel Specification](https://trustoverip.org/wp-content/uploads/ToIP-Governance-Metamodel-Specification-V1.0-2022-12-21.pdf) created by the [Governance Stack Working Group (GSWG)](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group).

## 1.2. Terminology and Notation

[Glossary - General Trust Over IP Terms](https://trustoverip.github.io/toip/glossary)

## 1.3. Localization

The standard language for this governing framework is American English.
 
## 1.4. Governing Authority

The Tenure and Resource Stewardship Branch is the governing authority and party responsible for developing, maintaining and implementing the Governance Framework (GF). 
The contact for petitioners and relying parties of this GF during the pilot stage of development is:
* 	**Name:** Kyle Robinson
* 	**Title:** Senior Strategic Advisor, Digital Trust Ecosystems
* 	**Organization:** Briartech Consulting Inc.
* 	**Email:** [kyle.robinson@briartech.ca](mailto:kyle.robinson@briartech.ca)

## 1.5. Administering Authority
Energy, Mines and Digital Trust (EMDT) is the Administering Authority on behalf of the Tenure and Resource Stewardship Branch during the pilot phase of development.

## 1.6. Purpose

This Petroleum and Natural Gas Title Credential is issued by the Tenure and Resource Stewardship Branch and includes information contained within the British Columbia Land Title Document. The purpose of this governance framework is to outline the process associated with governance, issuance, verification, and revocation of a BC Petroleum and Natural Gas Title Credential.  

## 1.7. Scope

This governance framework (GF) covers the BC Petroleum and Natural Gas Title Credential. Each section of the PNG outlines the authority and legislative process for each. 

## 1.8. Objectives
TBD

## 1.9. Principles
TBD

## 1.10. General Requirements
TBD

## 1.11. Revisions
TBD

## 1.12. Extensions
 no extensions

## 1.13. Schedule of Controlled Documents
TBD

# 2. Controlled Documents

## 2.1. Glossary
TBD

## 2.2. Risk Assessment
TBD

## 2.3. Trust Assurance and Certification
TBD

## 2.4. Governance Requirements
TBD

## 2.5. Business Requirements
TBD

## 2.6. Technical Requirements

### 2.6.1. Schema Definition

This schema definition follows the AnonCreds specification (https://anoncreds-wg.github.io/anoncreds-spec/)

Attribute | Format | Rules | Notes	
--- | --- | --- | --- |
title_number | String  | not NULL | Number used to uniquely identify a title. The title number is assigned based on administrative policy by the Tenure and Resource Stewardship Branch.
title_type | String | not NULL | This field specifies the type of title based on the [Petroleum Natural Gas Act (PNG)](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01). Title types can include the following: **1. Lease** ([Part 6](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#part6)); **2. Permit** ([Part 5](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#part5)); **3. Drilling Licence** ([Part 5.1](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#part5.1)), and **4. Storage Reservoir Licence** ([Part 14.130](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#section130)). 
issue_date | String | not NULL| The date when a title is issued, format is YYYY/MM/DD. 
effective_date | String | not NULL | The date when the title becomes effective, format YYYY/MM/DD. This date usually follows after an issuance date and signals the start of a title period.
term | String | not NULL | This describes the length of time (term) granted for each title, expressed in days, months, and years following this format: D/M/Y.
expiry_date | String | not Null | Expiry date is defined as effective date plus term, expressed as YYYY/MM/DD. This date signals the end of the title period.
containing | String | not Null | This section refers to what is contained within a specific title. Note, there are limitations that apply in specific circumstances as outlined in the PNG. 
lessee| String | not Null | As defined by [the PNG](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#section130), a Lessee is "a person in whose name a lease is recorded in the divisions records". _Format is first name, middle name, last name._ 
percent_interest | String | not Null | This defines the percentage of interest alloted to each party named in the Lease document. 
tract_number | String | not Null | A unique identifying number for each tract issued by ______. Tracts are an administrative device to organize all title locations sharing identical rights into separate groupings.
tract_location | String | not Null | This outlines the percise location for a tract listed on a Lease document using specific attributes from one of two land survey systems currently in use within BC. _Specify the format_
tract_rights | String | not Null | This outlines the rights associated with each individual tract listed on a lease document. 
tract_notes | String | not Null | Outlines specific notes or points associated with each tract. Definitions of zones used in tract rights by reference to specific depth intervals in the type well named in the same note. _Specify format used_
caveats | String | not Null | Caveats provide information and guidance to the tenure holder that will assist in activity planning by identifying potential access restrictions. Caveats will also flag concerns identified through pre-tenure consultation and may recommend engagement with First Nations, stakeholders, and other agencies as appropriate. Caveats often point to relevant statute and policy and are not binding or enforced by the Ministry.



### 2.6.2. Credential Implementation
TBD

## 2.7. Information Trust Requirements
TBD

## 2.8. Inclusion, Equitability, and Accessibility Requirements
TBD

## 2.9. Legal Agreements
TBD

# End of Document
