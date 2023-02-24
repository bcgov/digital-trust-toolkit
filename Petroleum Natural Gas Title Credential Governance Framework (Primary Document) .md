# BC Petroleum Natural Gas Title Governance Framework (Primary Document)

# 1. Primary Document

## 1.1 Introduction

The majority of subsurface petroleum and natural gas resources in British Columbia are owned by the Province. By entering into a tenure agreement with the Province, private industry can develop these resources. Tenure agreements with the Province give private developers rights to petroleum and natural gas resources. Information can be found on the [BC Government Petroleum and Natural Gas Tenure Site](https://www2.gov.bc.ca/gov/content/industry/natural-gas-oil/petroleum-natural-gas-tenure)

Legislation and regulations govern the disposition, administration and management of petroleum and natural gas [BC Petroleum and Natural Gas Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/00_96361_01) 

The development of this documentation follows the governance framework created by the [Trust over IP Foundation (ToIP)](https://trustoverip.org/) [Governance Metamodel Specification](https://trustoverip.org/wp-content/uploads/ToIP-Governance-Metamodel-Specification-V1.0-2022-12-21.pdf) created by the [Governance Stack Working Group (GSWG)](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group).

These materials are made available under and are subject to the [Creative Commons Attribution 4.0 International license](http://creativecommons.org/licenses/by/4.0/legalcode).

THESE MATERIALS ARE PROVIDED “AS IS.” The Trust Over IP Foundation, established as the Joint Development Foundation Projects, LLC, Trust Over IP Foundation Series ("ToIP"), and its members and contributors (each of ToIP, its members and contributors, a "ToIP Party") expressly disclaim any warranties (express, implied, or otherwise), including implied warranties of merchantability, non-infringement, fitness for a particular purpose, or title, related to the materials. The entire risk as to implementing or otherwise using the materials is assumed by the implementer and user. 

IN NO EVENT WILL ANY ToIP PARTY BE LIABLE TO ANY OTHER PARTY FOR LOST PROFITS OR ANY FORM OF INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY CHARACTER FROM ANY CAUSES OF ACTION OF ANY KIND WITH RESPECT TO THESE MATERIALS, ANY DELIVERABLE OR THE ToIP GOVERNING AGREEMENT, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, AND WHETHER OR NOT THE OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

***Acknowledgements***

This governance framework includes structural elements from the Trust over IP Metamodel that were developed by Governance Stack Working Group of the Trust over IP Foundation, the eSSIF Lab Glossary and Mental Models, were contributed to the Trust Over IP Foundation under the CC BY-SA 4.0 license.  There have also been contributions from the Concepts & Terminology Working Group at ToIP, the Human Experience Working Group at ToIP and the Ecosystem Foundry Working Group at ToIP, the work of the Governance Framework Working Group at Sovrin Foundation is also acknowledged in providing support.
## 1.2. Terminology and Notation

Please reference [Glossary - General Trust Over IP Terms](https://trustoverip.github.io/toip/glossary).

**Requirements** include any combination of Machine-Testable Requirements and Human-Auditable Requirements. Unless otherwise stated, all Requirements MUST be expressed as defined in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

- Mandates are Requirements that use a MUST, MUST NOT, SHALL, SHALL NOT or REQUIRED keyword.
- Recommendations are Requirements that use a SHOULD, SHOULD NOT, or RECOMMENDED keyword.
- Options are Requirements that use a MAY or OPTIONAL keyword.

**Machine-Testable Requirements** are those with which compliance can be verified using an automated test suite and appropriate scripting or testing software.

**Rules** are Machine-Testable Requirements that are written in a Machine-Readable language and can be processed by a Rules Engine. They are expressed in a structured rules language as specified by the Governance Framework.

**Human-Auditable Requirements** are those with which compliance can only be verified by an audit of people, processes, and procedures.

**Policies** are Human-Auditable Requirements written using standard conformance terminology. The Policies used in the Governance Framework will use the standard terminology detailed in RFC 2119 keywords. Note that all RFC 2119 keywords have weight from an auditing perspective. An implementer MUST explain why a SHOULD or RECOMMENDED requirement was not implemented and SHOULD explain why a MAY requirement was implemented.

**Specifications** are documents containing any combination of Machine-Testable Requirements and Human-Auditable Requirements needed to produce technical interoperability.

## 1.3. Localization

The standard language for this governing framework (GF) is English.

## 1.4 Governing Authority

The Tenure and Resource Stewardship Branch is the governing authority and party responsible for developing, maintaining and implementing the Governance Framework (GF)

The contact information for
* 	**Name:** 
* 	**Title:** 
* 	**Organization:**
* 	**Email:**

## 1.5. Administering Authority

[Energy, Mines and Digital Trust (EMDT)](https://digital.gov.bc.ca/case-studies/emdt) is the Administering Authority on behalf of The Mining Association of Canada (MAC) during the pilot phase of development.

## 1.6 Purpose 

The purpose of this Governance Framework (GF) is toe define the parameters of the BC Petroleum and Natural Gas Tenure Credential. 

## 1.7 Scope

This Governance Framework (GF) is to define the parameters of a digital BC Petroleum and Natural Gas Tenure Credential. 

## 1.8 Objectives 

This GF describes the BC Petroleum and Natral Gas Title Credential consisting of all data elements included in a BC Lease Title Document. 

## 1.9 Principles 

## 1.10 General Requirements

### Verification Process

the verification process will be ___________________________

## 1.11. Revisions
Version 1.0

## 1.12. Extensions
There are no extensions to this Governance Framework.

## 1.13. Schedule of Controlled Documents
TBD

# 2. Controlled Documents

## 2.1. Glossary

### Key Roles

*  **Governing Authority**: BC EMLI is the BC Petroleum and Natural Gas Title governing authority. Additionally, BC EMLI will train and set up new members. 
*  **Credential Holders**: BC Petroleum and Natural Gas Operators are the holders. 
*  **Verificaton Service Provider (VSP)**: ___________________________

## 2.2. Risk Assessment
TBD

## 2.3. Trust Assurance and Certification
TBD

## 2.4. Governance Requirements
TBD

## 2.5. Business Requirements

### Key Processes

All users of the BC Petroleum and Natural Gas Title Credential must adhere to provincial legislation and reuirements

## 2.6. Technical Requirements (Credential)

The Verifiable Credential format for this credential is AnonCreds specification (https://anoncreds-wg.github.io/anoncreds-spec/)

## 2.6.1 Schema Definition


This schema definition follows the AnonCreds specification (https://anoncreds-wg.github.io/anoncreds-spec/)

Attribute | Format | Rules | Notes	
--- | --- | --- | --- |
title_number | String  | not NULL | Number used to uniquely identify a title. The title number is assigned based on administrative policy by the Tenure and Resource Stewardship Branch.
title_type | String | not NULL | This field specifies the type of title based on the [Petroleum Natural Gas Act (PNG)](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01). Title types can include the following: **1. Lease** ([Part 6](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#part6)); **2. Permit** ([Part 5](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#part5)); **3. Drilling Licence** ([Part 5.1](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#part5.1)), and **4. Storage Reservoir Licence** ([Part 14.130](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#section130)). 
issue_date | String | not NULL| The date when a title is issued, format is YYYY (Years). Under section 64 the portion that is being split out is surrendered based on this section. 
effective_date | String | not NULL | The date when the title becomes effective, format YYYY (Years). This date usually follows after an issuance date and signals the start of a title period.
term | String | not NULL | This describes the length of time (term) granted for each title, expressed in years (5).
expiry_date | String | not Null | Expiry date is defined as effective date plus term, expressed as YYYY (Years). This date signals the end of the title period.
area | String | not Null | Size included in planned use Measured by hectares (surface area in plan view measures in full hectares). This includes 3 dimensional layers. 
title_holder| String | not Null | As defined by [the PNG](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#section130), a title holder is "a person in whose name a PNG Title Document is recorded in the divisions records". Holder is also defined as ""holder of a location" means, in accordance with the context, a permittee, licensee or lessee" _Format is first name, middle name, last name._ Title holder will hold a percentage (%) interest in the title. 
percent_interest | String | not Null | This defines the percentage (%) of interest allotted to each party named in the PNG Title Document. Percentage of ownership should always equal %100 total. 
tract_number (s) | String | not Null | A unique identifying number for each tract. Tracts are an administrative device to organize all title locations sharing identical rights into separate groupings.
tract_location (s) | String | not Null | This outlines the precise location for a tract listed on a PNG Title Document using specific attributes from one of two land survey systems currently in use within BC. _Specify the format_
tract_rights | String | not Null | This outlines the rights associated with each individual tract listed on a PNG Title Document. This would be linked with a BC business number (i.e. BC123456). Tract rights are identified using specific Code Lists. There are Stratigraphic Codes (used to define tract rights) and Standard Zone Designations. The Stratigraphic Codes outline (1) Strata Zone Codes (2) Descriptions (3) Effective Dates and (4) Expiry Dates. Standard Zone Designations outline (1) standards (2) codes (3) descriptions (4) short descriptions (5) effective dates (6) expiry dates. 
tract_notes | String | not Null | Outlines specific notes or points associated with each tract. Definitions of zones used in tract rights by reference to specific depth intervals in the type well named in the same note. _Specify format used_. These are used to describe the type wells and the intervals in the type wells that are used to create the type. 
caveats | String | not Null | Caveats provide information and guidance to the tenure holder that will assist in activity planning by identifying potential access restrictions. Caveats will also flag concerns identified through pre-tenure consultation and may recommend engagement with First Nations, stakeholders, and other agencies as appropriate. Caveats often point to relevant statute and policy and are not binding or enforced by the Ministry.

### 2.6.2. Credential Implementation
Ledger | SCHEMA DEF | CRED DEF | Notes	
--- | --- | --- | ---
BCovrin Test | TBD | --- | ---

## 2.7. Information Trust Requirements
TBD

## 2.8. Inclusion, Equitability, and Accessibility Requirements
TBD

## 2.9. Legal Agreements
TBD

# End of Document



