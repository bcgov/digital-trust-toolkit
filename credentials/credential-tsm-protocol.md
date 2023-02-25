# TSM Protocol Credential Governance Framework (Primary Document)

# 1. Primary Document

## 1.1. Introduction

Established in 2004, the Towards Sustainable Mining™ (TSM) is a globally recognized program developed by the Mining Association of Canada (MAC) to aid mining companies in a standardized way to evaluate and manage their environmental and social responsibilities. The TSM program provides a set of eight (8) protocols that focus on three core pillars: Communities and People, Environmental Stewardship and Energy Efficiency.

Each of the eight protocols consist of a set of indicators designed to help mining facilities build, measure and publicly report on the quality of their management systems and performance in key areas of mining activity at the site level. The periodic issuance of TSM reports is required for all members of the Mining Association of Canada (MAC). This Governance Framework (GF) documents the TSM `Protocol/Summary` credential and its requirements.

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

## 1.4. Governing Authority

[The Mining Association of Canada (MAC)](https://mining.ca/) is the governing authority that leads the development, maintenance, and implementation of the Governance Framework (GF) for TSM. The governance and decision-making process for the TSM program includes the following groups and committees:

* The **TSM Governance Team** is a subcommittee of the MAC Board of Directors. This group is responsible for providing strategic direction on all matters related to TSM and making recommendations to the Board on proposed changes to the program.

* The **MAC Board of Directors** sets the overall objective and recommends changes. In practice, the MAC Board will only consider a decision if the Community of Interest Advisory Panel (COI Panel) is comfortable with the direction proposed.

* The **Community of Interest Advisory Panel (COI Panel)** is an independent advisory body comprised of individuals from Indigenous groups, mining communities, 
non-governmental organizations, and organized labour, among others. Industry representatives participate in the panel on an exofficio basis.

*Reference* [**TSM 101: A Primer**](https://mining.ca/wp-content/uploads/dlm_uploads/2023/01/SPARK-MAC-TSM-PRIMER-2022-ENG.pdf) 
![TSMGovernanceTriangle](https://user-images.githubusercontent.com/122049466/215233717-be0da646-ddb5-431d-9cad-579f778475d2.PNG)


The contact information for [The Mining Association of Canada (MAC)](https://mining.ca/) is:
* 	**Name:** Ben Chalmers
* 	**Title:** Senior Vice President
* 	**Organization:** The Mining Association of Canada
* 	**Email:** [bchalmers@mining.ca](mailto:bchalmers@mining.ca)

## 1.5. Administering Authority

[Energy, Mines and Digital Trust (EMDT)](https://digital.gov.bc.ca/case-studies/emdt) is the Administering Authority on behalf of The Mining Association of Canada (MAC) during the pilot phase of development.

## 1.6. Purpose

The purpose of this Governance Framework (GF) is to define the parameters of a digital TSM credential.

## 1.7. Scope

This Governance Framework applies to the certification statement credential for the TSM certification from the Mining Association of Canada (MAC).

## 1.8. Objectives

This GF describes the TSM credential consisting of the following eight protocols used as performance indicators (detailed descriptions of the protocols can be accessed online through MAC's Website: [TSM Protocols & Frameworks](https://mining.ca/towards-sustainable-mining/protocols-frameworks/)):

The TSM summary credential is a combination of pass/fail scores and letter grades ranging from Level C to Level AAA. 
![TSMRatingScale](https://user-images.githubusercontent.com/122049466/215434528-b231e7aa-5c64-4313-b30a-e022d9b47d02.PNG)

## 1.9. Principles

TSM has a set of [Guiding Principles](https://mining.ca/download/36658/), which all participating members must commit to. These [Guiding Principles](https://mining.ca/download/36658/), address the expectation of its members towards adopting social, economic and environmental practices that align with the priorities and values of their communities of interest. 


## 1.10. General Requirements

### Verification Process

Every three years TSM self-assessed scores are validated by an [appointed TSM Verification Service Provider (VSP)](https://mining.ca/wp-content/uploads/dlm_uploads/2022/03/2022-March-Verifier-List.pdf). 
More information about the verification process can be found in the [TSM Verification Guide]( https://mining.ca/wp-content/uploads/dlm_uploads/2021/12/TSM-Verification-Guide.pdf)

![TSMVerificationLayers](https://user-images.githubusercontent.com/122049466/215434707-681ab0e5-de20-4ab2-8908-04373669a3bd.PNG)

## 1.11. Revisions
Version 1.0

## 1.12. Extensions
There are no extensions to this Governance Framework.

## 1.13. Schedule of Controlled Documents
TBD

# 2. Controlled Documents

## 2.1. Glossary

*  [**Verification Service Provider (VSP)**](https://mining.ca/wp-content/uploads/dlm_uploads/2021/11/2021-TSM-Verifier-Terms-of-Reference.pdf): Independent third-party verifiers act as auditors that validate self-assessed TSM scores. Every three years, a trusted VSP critically reviews a company’s self-assessments to determine if there is adequate evidence to support the performance ratings reported.
*  [**Community of Interest (COI) Advisory Panel**](https://mining.ca/wp-content/uploads/dlm_uploads/2021/06/FINAL-2020-COI-Panel-Terms-of-Reference.pdf): Independent multi-interest advisory body comprised of individuals from Indigenous groups, mining communities, non-governmental organizations, and organized labour, among others. The MAC Board also selects a few representatives from the TSM Governance Team to participate in the panel on an ex-officio basis. 

## 2.2. Risk Assessment
TBD

## 2.3. Trust Assurance and Certification
TBD

## 2.4. Governance Requirements
The TSM `Protocol/Summary` Credential is governed by the [**TSM Program Governance**](https://mining.ca/wp-content/uploads/dlm_uploads/2021/12/TSM-Program-Governance.pdf) 

## 2.5. Business Requirements

All members of MAC must adhere to the TSM reporting requirements:

* Self-assessed TSM performance indicators must be reported to MAC annually. Amendments to this requirement are offered to high TSM performers and described in the [TSM Primer]( https://mining.ca/wp-content/uploads/dlm_uploads/2021/04/TSM-Primer-English.pdf) under the section labelled “Optional Reporting and Verification Process”

* Every three years, a Verification Service Provider (VSP) critically reviews a company’s self-assessments to determine if there is adequate evidence to support the performance ratings reported. A list of VSPs is provided [here](https://mining.ca/wp-content/uploads/dlm_uploads/2022/08/2022-August-TSM-Verifier-List.pdf).

* In the year of external verification, a company’s CEO, or equivalent, is required to submit a letter to MAC that confirms the external verification has been conducted in accordance with the Terms of Reference for VSPs.

* Each year, MAC’s independent COI Panel selects a sample of companies to present and discuss their TSM results

* Each member assigns a senior employee as an Initiative Leader. This person is responsible for coordinating and leading the implementation of TSM within the company and typically has a direct reporting relationship with the company’s Board representative.
The General Requirements section is reserved for policies that apply generally to the Governance Framework as a whole and not just in the context of a particular controlled document.

* All articles concerning ESG data must not sold to third parties. All governing parties shall implement responsible use policies that apply to ESG recording.

* Mines must identify themselves using high assurance verifiable credentials when submitting information related to ESG

## 2.6. Technical Requirements (Credential)

The Verifiable Credential format for this credential is AnonCreds specification (https://anoncreds-wg.github.io/anoncreds-spec/)

### 2.6.1 Schema Definition

This schema definition follows the AnonCreds specification (https://anoncreds-wg.github.io/anoncreds-spec/)

Attribute | Format | Rules | Notes
--- | --- | --- | ---
company_name | String | Not NULL | name of business entity
facility_name | String | Not NULL | name of facility or site
facility_address | String | Not NULL | address of facility or site
country_operation | String | Not NULL | country of facility or site
products_name | String | Not NULL | name of products or metals produced on site
operation_type | String | Not NULL | mining, concentrate blending, smelting, refining, other
infrastructure_type | String | Not NULL | roads, rails, ports, other
verification_company_name | String | Not NULL | name of verification company
accredited_tsm_verifier | String | Not NULL | yes, no
verification_dates | String | Not NULL | date range of verification activities, YYYY/MM/DD
verification_period | String | Not NULL | date, YYYY/MM/DD
verification_method_summary | String | Not NULL | textbox, description of method
verification_activities_summary | String | Not NULL | textbox, description of activities
verification_statement_tor | String | Not NULL | checkbox, checkbox indicates yes
verification_statement_accuracy | String | Not NULL | checkbox, checkbox indicates yes
verification_statement_limitations | String | Not NULL | textbox, verifier identified limitations
verification_statement_comments | String | Not NULL | textbox, verifier comments
verification_statement_lead_name| String | Not NULL | textbox, full legal name of the lead verifier
verification_statement_date | String | Not NULL | date, YYYY/MM/DD
verification_statement_signature | String | Not NULL | textbox, printed signature of lead verifier
summary_tsm_min | String | Not NULL | levels C - AAA, minimum level awarded for all TSM protocols
indigenous_q1 | String | Not NULL | levels C - AAA, Community of Interest (COI) Identification
indigenous_q2 | String | Not NULL | levels C - AAA, Community of Interest (COI) Engagement
indigenous_q3 | String | Not NULL | levels C - AAA, effective Indigenous engagement and dialog
indigenous_q4 | String | Not NULL | levels C - AAA, community impact and benefit management
indigenous_q5 | String | Not NULL | levels C - AAA, Community of Interest (COI) response mechanism
indigenous_summary_min | String | Not NULL | levels C - AAA, minimum level awarded for indigenous protocols
safety_health_q1 | String | Not NULL | levels C - AAA, commitments and accountability
safety_health_q2 | String | Not NULL | levels C - AAA, planning and implementation
safety_health_q3 | String | Not NULL | levels C - AAA, training, behaviour and culture
safety_health_q4 | String | Not NULL | levels C - AAA, monitoring and reporting
safety_health_q4_pd | String | Not NULL | checkbox, link to public disclosure
safety_health_q5 | String | Not NULL | levels C - AAA, performance
safety_health_summary_min | String | Not NULL | levels C - AAA, minimum level awarded for safety and health protocols
corp_crisis_and_communication_preparedness| String | Not NULL | yes, no
corp_crisis_and_communication_review| String | Not NULL | yes, no
corp_crisis_and_communication_training| String | Not NULL | yes, no
labour_forced_q1| String | Not NULL | yes, no - preventing forced labour
labour_child_q2| String | Not NULL | yes, no - preventing child labour
corp_climate_q1 | String | Not NULL | levels C - AAA, coporate level management
site_climate_q2 | String | Not NULL | levels C - AAA, site level management
site_climate_q3 | String | Not NULL | levels C - AAA, site performance targets and reporting
climate_summary_min | String | Not NULL | levels C - AAA, minimum level awarded for climate protocols
tailings_management_summary_min | String | Not NULL | levels C - AAA, minimum level awarded for climate protocols
biodiversity_conservation_summary_min | String | Not NULL | levels C - AAA, minimum level awarded for climate protocols
energy_ghg_summary_min | String | Not NULL | levels C - AAA, minimum level awarded for climate protocols
water_stewardship_summary_min | String | Not NULL | levels C - AAA, minimum level awarded for climate protocols

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
