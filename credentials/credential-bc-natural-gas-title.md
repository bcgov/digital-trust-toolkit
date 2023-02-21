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

This governance framework (GF) covers the BC Petroleum and Natural Gas Title Credential.

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
title_number | String  | not NULL | Method used to uniquely identify a title, e.g., the title number, is administrative policy, rather than legislated.
title_type | String | not NULL | Lease, Permit, Drilling Licence, Underground Storage Lease. “Underground Storage Lease” is now “Storage Reservoir Licence”Permits: PNG Act Part 5 Leases: PNG Act Part 6 Drilling Licence: PNG Act Part 5.1 Storage Reservoir Licence: PNG Act s.130
date-issue | String | not NULL| Petroleum and Natural Gas Act Section 47 Term and Renewal. Permits: PNG Act s.47 Leases: PNG Drilling Licence and Lease Regulation, s.5.1 Drilling Licences: PNG Drilling Licence and Lease Regulation, s.3(3) Storage Reservoir Licence: PNG Act s.130
effective_date | String | not NULL | Petroleum and Natural Gas Act Section 47 Term and Renewal. Permits: PNG Act s.47 Leases: PNG Drilling Licence and Lease Regulation, s.5.1 Drilling Licences: PNG Drilling Licence and Lease Regulation, s.3(3) Storage Reservoir Licence: PNG Act s.130
term | String | not NULL | Petroleum and Natural Gas Act Section 47 Term and Renewal. Permits: PNG Act s.47 Leases: PNG Drilling Licence and Lease Regulation, s.5.1 Drilling Licences: PNG Drilling Licence and Lease Regulation, s.3(3) Storage Reservoir Licence: PNG Act s.130
date_expiry | String | not Null | Effective date plus term Petroleum and Natural Gas Act section 58 (3) outlines Expiration and Continuation of Leases.Permits: PNG Act s.47 Leases: PNG Drilling Licence and Lease Regulation, s.5.1 Drilling Licences: PNG Drilling Licence and Lease Regulation, s.3(3) Storage Reservoir Licence: PNG Act s.13
containing | String | not Null | Petroleum and Natural Gas Act section 65 outlines Spacing Areas "For the purposes of this act and the Oil and Gas activities Act, British Columbia, except where insufficient area exists adjacent to its boundaries, is divided into normal spacing areas for petroleum and natural gas wells." With the partial exception of a drilling licence, the maximum size of a title in hectares is not defined in legislation.  Drilling licences wholly or partly within the Peace River Block are limited to 144 units (petroleum grid) or 36 sections (Dominion Land Survey).
lessee| String | not Null | Petroleum and Natural Gas Act Section 50 (1) and (2) outlines Leasee (s) and their rights. Section 1 outlines lessee as "a person in whose name a lease is recorded in the divisions records". he same section also states that “holder of a location means, in accordance with the context, a permittee, licensee, or lessee.”
percent_interest | String | not Null | As defined in Petroleum and Natural Gas Act Section 1 outlining the definition of "interest"
tract_number | String | not Null | number ID. Tracts are an administrative device to organize all title locations sharing identical rights into separate groupings.
tract_location | String | not Null | Petroleum and Natural Gas Act Section 1 defines "location means the land described in a permit, licence or lease". The preceding statement refers to location of a title, which may consist of several tracts.  A “tract location” is the specific locations Location attributes are from one of two land survey systems in use in BC, and are defined in the PNG Grid Regulation.
tract_rights | String | not Null | Petroleum and Natural Gas Act Section 38 describes "Rights Conferred by Permit". this includes "the holder of a permit has the exclusive right to apply under the Oil and Gas Activities Act to do exploratory drilling for petroleum or natural gas or both owned by the government and within the boundaries of the location of the permit" Tract rights are defined in terms of zones, defined in Section 1 PNG Act, and the hydrocarbon fluids (petroleum, natural gas, or both) within them.
tract_notes | String | not Null | Definitions of zones used in tract rights by reference to specific depth intervals in the type well named in the same note.
caveats | String | not Null | PNG Act s.71(1) Caveats provide information and guidance to the tenure holder that will assist in activity planning by identifying potential access restrictions. Caveats will also flag concerns identified through pre-tenure consultation and may recommend engagement with First Nations, stakeholders, and other agencies as appropriate. Caveats often point to relevant statute and policy and are not binding or enforced by the Ministry.




### 2.6.2. Credential Implementation
TBD

## 2.7. Information Trust Requirements
TBD

## 2.8. Inclusion, Equitability, and Accessibility Requirements
TBD

## 2.9. Legal Agreements
TBD

# End of Document
