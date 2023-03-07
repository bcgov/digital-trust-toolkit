# BC Petroleum Natural Gas Title Governance Framework (Primary Document)

# 1. Primary Document

## 1.1 Introduction

The majority of subsurface petroleum and natural gas resources in British Columbia are owned by the Province. By entering into a tenure agreement with the Province, private industry can develop these resources. Tenure agreements with the Province give private developers rights to petroleum and natural gas resources through Petroleum and Natural Gas Titles. Information can be found on the [BC Government Petroleum and Natural Gas Tenure Site](https://www2.gov.bc.ca/gov/content/industry/natural-gas-oil/petroleum-natural-gas-tenure).

Legislation and regulations govern the disposition, administration and management of petroleum and natural gas [BC Petroleum and Natural Gas Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/00_96361_01). 

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

[The Tenure and Resource Stewardship Branch](https://www2.gov.bc.ca/gov/content/industry/natural-gas-oil/petroleum-natural-gas-tenure) is the governing authority and party responsible for developing, maintaining and implementing the Governance Framework (GF)

The contact information for The Tenure and Resource Stewardship Branch: 
* 	**Name:** 
* 	**Title:** 
* 	**Organization:**
* 	**Email:**

## 1.5. Administering Authority

[Energy, Mines and Digital Trust (EMDT)](https://digital.gov.bc.ca/case-studies/emdt) is the Administering Authority on behalf the The Tenure and Resource Stewardship Branch during the pilot phase of development.

## 1.6 Purpose 

The purpose of this Governance Framework (GF) is to define the parameters of the BC Petroleum and Natural Gas Title Credential. 

## 1.7 Scope

This Governance Framework (GF) is to define the parameters of a digital BC Petroleum and Natural Gas Title Credential. 

## 1.8 Objectives 

This GF describes the BC Petroleum and Natural Gas Title Credential consisting of all data elements included in a BC Petroleum and Natural Gas Title Document. 

## 1.9 Principles 

TBD

## 1.10 General Requirements

### Verification Process

The verification process will be ___________________________

## 1.11. Revisions
Version 1.0

## 1.12. Extensions
There are no extensions to this Governance Framework.

## 1.13. Schedule of Controlled Documents
TBD

# 2. Controlled Documents

## 2.1. Glossary
[ToIP Core Glossary](https://trustoverip.github.io/toip/glossary)

[BC Oil and Gas Regulator Oil and Gas Glossary and Definitions](https://bc-er.ca/files/operations-documentation/Oil-and-Gas-Glossary-and-Definitions.pdf)

## 2.2. Risk Assessment
TBD

## 2.3. Trust Assurance and Certification
TBD

## 2.4. Governance Requirements

Legislation and regulations govern the disposition, administration and management of petroleum and natural gas. These can be found in the [BC Petroleum and Natural Gas Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/00_96361_01). 

## 2.5. Business Requirements

### Key Roles

*  **Governing Authority**: BC EMLI is the BC Petroleum and Natural Gas Title governing authority.
*  **Credential Holders**: BC Petroleum and Natural Gas Operators. 
*  **Verification Service Provider (VSP)**: ___________________________

### Key Processes

The primary use of the Petroleum and Natural Gas Title Credential is to allow holders in BC to comply with required processes and procedures associated with maintaining a Petroleum and Natural Gas Title within the province. All users of the BC Petroleum and Natural Gas Title Credential must adhere to provincial legislation and requirements.

## 2.6. Technical Requirements (Credential)

The Verifiable Credential format for this credential is AnonCreds specification (https://wiki.hyperledger.org/display/anoncreds)

## 2.6.1 Schema Definition


This schema definition follows the AnonCreds specification (https://wiki.hyperledger.org/display/anoncreds)

Name | Attribute | Format | Rules | Notes	
--- | --- | --- | --- | --- |
Title Number | title_number | String  | not NULL | Number used to uniquely identify a title. The title number is assigned based on administrative policy by the Tenure and Resource Stewardship Branch.
Title Type | title_type | String | not NULL | This field specifies the type of title based on the [Petroleum Natural Gas Act (PNG)](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01). Title types can include the following: **1. Lease** ([Part 6](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#part6)); **2. Permit** ([Part 5](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#part5)); **3. Drilling Licence** ([Part 5.1](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#part5.1)), and **4. Storage Reservoir Licence** ([Part 14.130](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#section130)). Each title will have one title type only.
Issue Date | issue_date | String | not NULL| The date when a title is issued, format is YYYY-MM-DD. Under section 64 [BC Petroleum and Natural Gas Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#section64)  the portion that is being split out is surrendered based on this section. 
Effective Date | effective_date | String | not NULL | The date when the title becomes effective, format YYYY-MM-DD. This date usually follows after an issuance date and signals the start of a title period. This date does not change.
Term | term | String | not NULL | This describes the length of time (term) granted for each title, expressed in YYYY. This date does not change.
Expiry Date | expiry_date | String | not NULL | Expiry date is defined as effective date plus term, expressed as YYYY-MM-DD. This date signals the end of the title period.
Area | area | String | not NULL | Size included in planned use measured by hectares (surface area in plan view measures in full hectares). This includes 3 dimensional layers. 
Title Holders | title_holders| String | not NULL | As defined by [the PNG](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01#section130), a title holder is "a person in whose name a PNG title document is recorded in the divisions records". Holder is also defined as "holder of a location" meaning "in accordance with the context, a permittee, licensee" _Format is first name, middle name, last name._ Title holders can be (1) Registered Companies (2) Persons (3) does not neccessarily have to be a business located in BC. Title holder will hold a percentage (%) interest in the title. Percent Interest defines the percentage (%) of interest allotted to each party named in the PNG title document. Percentage of ownership can be divided up to eight digits and should always equal 100% total. Lessee is defined by [the PNG](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01). According to the act, lessee is defined as "a person in whose name a lease is recorded in the division records". 
Tracts | tracts | String | not NULL | **Tract** is a large area of land or a measured area of land. 
| | | | | **Tract Numbers** On all title documents is a heading which is the Tract Number. Tract Numbers are unique identifying numbers for each tract. Tracts are an administrative device to organize all title locations sharing identical rights into separate groupings.  
| | | | | **Tract Locations** Following the Tract Number is a description of Tract Location. Tract Location outlines the precise location for a tract listed on a PNG title document using specific attributes from one of two land survey systems currently in use within BC. _Specify the format_. 
| | | | | **Tract Rights** Following Tract Location is a description called Tract Rights. This section defines rights as either "Included (I)" or "Excluded (E)". Zone names are coded  "Petroleum (P)" "Petroleum Natural Gas (PNG)" or "". Each right will be denoted by its corresponding letter. This section outlines the rights associated with each individual tract listed on a PNG title document. This would be linked with a BC business number (i.e. BC123456). Tract rights are identified using specific Code Lists. There are Stratigraphic Codes (used to define tract rights) and Standard Zone Designations. 
| | | | | **Stratigraphic Codes** are used to define tract rights.  The Stratigraphic Codes outline (1) Strata Zone Codes (2) Descriptions (3) Effective Dates and (4) Expiry Dates. 
| | | | | **Strata Zone Code TT** To Top Of 
| | | | | **Strata Zone Code TB** To Base Of
| | | | | **Strata Zone Code SE** Special Excusion 
| | | | | **Strata Zone Code IN** In
| | | | | **Strata Zone Code FT** From Top Of 
| | | | | **Strata Zone Code FB** From Base Of 
| | | | | **Strata Zone Code DT** Down to Top Of 
| | | | | **Strata Zone Code DB** Down to Base of 
| | | | | **Strata Zone Code BT** Below Top Of 
| | | | | **Strata Zone Code BB** Below Base Of 
| | | | | **Strata Zone Code AZ** All Zones
| | | | | **Standard Zone Designations** Intervals are defined as either feet or meters. Then it identifies the log type. Then it identifies the well by the well permit number. These codes outline (1) a standard 5 diget code (3) descriptions of this code including descriptions of geographical areas and details (4) shortened descriptions of these details (5) effective dates (6) expiry dates.
| | | | | **Tract Notes** Following the description of Tract Rights is a section called Tract Notes. Tract Notes outlines specific notes or points associated with each tract. Definitions of zones used in tract rights reference specific depth intervals in the type well named in the same note. _Specify format used_. These are used to describe the type wells and the intervals in the type wells that are used to create the type. 
Caveats | caveats | String | not NULL | Caveats provide information and guidance to the tenure holder that will assist in activity planning by identifying potential access restrictions. Caveats will also flag concerns identified through pre-tenure consultation and may recommend engagement with First Nations, stakeholders, and other agencies as appropriate. Caveats often point to relevant statute and policy and are not binding or enforced by the Ministry.

### 2.6.2. Credential Implementation
Ledger | SCHEMA DEF | CRED DEF | Notes	
--- | --- | --- | ---
BCovrin Test | TBD | --- | ---

## 2.7. Information Trust Requirements
BC is bound by the [Freedom of Information and Protection of Privacy Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96165_00). BC’s Freedom of Information and Protection of Privacy Act sets out the access and privacy rights of individuals as they relate to the public sector.

## 2.8. Inclusion, Equitability, and Accessibility Requirements

BC is bound by legislation such as the [Accessible British Columbia Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/21019) 

BC has developed a [Diversity & Inclusion Strategy for the BC Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/diversity-inclusion/diversity-inclusion-strategy) which outlines a government wide strategy in supporting inclusion, equitability and access throughout the province. 


## 2.9. Legal Agreements
TBD

# End of Document


