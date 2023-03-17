
## Tenure and Resource Stewardship Branch Governance Framework

# 1. Primary Document

## 1.1. Introduction 

This document articulates the governance framework for [The Tenure and Resource Stewardship Branch (TRSB)](https://www2.gov.bc.ca/gov/content/industry/natural-gas-oil/petroleum-natural-gas-tenure) as a participant of the open global community that exchanges verifiable credentials [(layer four application of the Trust Over IP Foundation (ToIP) model)](https://www.trustoverip.org/wp-content/toip-model/).

The development of this documentation follows the governance framework created by the [Trust over IP Foundation (ToIP)](https://trustoverip.org/) [Governance Metamodel Specification](https://trustoverip.org/wp-content/uploads/ToIP-Governance-Metamodel-Specification-V1.0-2022-12-21.pdf) created by the [Governance Stack Working Group (GSWG)](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group).

These materials are made available under and are subject to the [Creative Commons Attribution 4.0 International license](http://creativecommons.org/licenses/by/4.0/legalcode).

THESE MATERIALS ARE PROVIDED “AS IS.” The Trust Over IP Foundation, established as the Joint Development Foundation Projects, LLC, Trust Over IP Foundation Series ("ToIP"), and its members and contributors (each of ToIP, its members and contributors, a "ToIP Party") expressly disclaim any warranties (express, implied, or otherwise), including implied warranties of merchantability, non-infringement, fitness for a particular purpose, or title, related to the materials. The entire risk as to implementing or otherwise using the materials is assumed by the implementer and user. 

IN NO EVENT WILL ANY ToIP PARTY BE LIABLE TO ANY OTHER PARTY FOR LOST PROFITS OR ANY FORM OF INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY CHARACTER FROM ANY CAUSES OF ACTION OF ANY KIND WITH RESPECT TO THESE MATERIALS, ANY DELIVERABLE OR THE ToIP GOVERNING AGREEMENT, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, AND WHETHER OR NOT THE OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

***Acknowledgements***

This governance framework includes structural elements from the Trust over IP Metamodel that were developed by Governance Stack Working Group of the Trust over IP Foundation, the eSSIF Lab Glossary and Mental Models, were contributed to the Trust Over IP Foundation under the CC BY-SA 4.0 license.  There have also been contributions from the Concepts & Terminology Working Group at ToIP, the Human Experience Working Group at ToIP and the Ecosystem Foundry Working Group at ToIP, the work of the Governance Framework Working Group at Sovrin Foundation is also acknowledged in providing support.

## 1.2. Terminology and Notation 

[Glossary - General Trust Over IP Terms](https://trustoverip.github.io/toip/glossary)

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
The standard language for this Governance Framework (GF) is American English.

## 1.4. Governing Authority 

[The Tenure and Resource Stewardship Branch (TRSB)](https://www2.gov.bc.ca/gov/content/industry/natural-gas-oil/petroleum-natural-gas-tenure) is the governing authority and party responsible for developing, maintaining and implementing the Governance Framework (GF). 

## 1.5. Administering Authority

[Energy and Mines Digital Trust (EMDT)](https://digital.gov.bc.ca/case-studies/emdt) is the Administering Authority on behalf of TRSB during the pilot phase of development.

* 	**Name:** Kyle Robinson 
* 	**Title:** Senior Strategic Advisor, Digital Trust Ecosystems
* 	**Organization:** Brairtech Consulting Inc.
* 	**Email:** kyle.robinson@brairtech.ca

## 1.6. Purpose

The purpose of this governance framework is to describe the rules/policies/procedures for verifiable credential exchanges involving the Tenure and Resource Stewardship Branch (TRSB) with the open global community. The purpose of the rules is to enable all actors to understand agreed upon standards, terminology and processes that allow the community to interact with TRSB in a trusted manner. This will help determine a governing framework and operating model for a global ecosystem that identifies how credentials can be issued, held, and verified. 

## 1.7. Scope 
The Tenure and Resource Stewardship Branch (TRSB) is a participant in an open ecosystem and the focus of this framework is to describe the process Tenure uses for digital exchanges on Indy networks.

## 1.8. Objectives

TBD

## 1.9. Principles 

TBD

## 1.10. General Requirements
TBD

## 1.11. Revisions
TBD

## 1.12. Extensions

There are no extensions to this Governance Framework.

## 1.13. Schedule of Controlled Documents
TBD

# 2. Controlled Documents

## 2.1. Glossary

Title Holder - In the [BC Petroleum & Natural Gas Title Credential Governance](https://github.com/bcgov/bc-vcpedia/blob/main/credentials/credential-bc-petroleum-natural-gas-title.md), the term title holder is used to reference a person and/or a company in whose name a PNG title document is recorded in the divisions records.

## 2.2. Risk Assessment

TBD

## 2.3. Trust Assurance and Certification

TBD

## 2.4. Governance Requirements

## 2.5. Business Requirements

## 2.5.1. Establishment of Connection

1. The Tenure and Resource Stewardship Branch (TRSB) MUST send an invitation to the other business entity via email to initiate the exchange of information. 
2. The receiving party MUST use the invitation in order to establish a secure connection.

## 2.5.2. Issuance of BC Petroleum & Natural Gas Title Credential 

Using the established connection, TRSB MUST issue a credential to the business entity.

1. TRSB MUST enter in the data for each of the credential attributes as outlined in the [BC Petroleum & Natural Gas Title Credential Governance](https://github.com/bcgov/bc-vcpedia/blob/main/credentials/credential-bc-petroleum-natural-gas-title.md)
3. TRSB SHALL offer the credential to the title holder
4. Any clarification questions MAY be asked via the secure messaging function
5. The title holder MAY choose to accept or negotiate the credential to request changes

## 2.6. Technical Requirements

## 2.6.1. Public DID of Tenure and Resource Stewardship Branch (TRSB)

Ledger | DID |
--- | --- |
BCovrin Test | 4uVA6nbXMGWYLE6hq99aDa |

## 2.7. Information Trust Requirements

The [Freedom of Information and Protection of Privacy Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96165_00) sets out the access and privacy rights of individuals as they relate to the public sector in British Columbia.

## 2.8. Inclusion, Equitability and Accessibility Requirement

The [Accessible British Columbia Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/21019) informs [**AccessibleBC**](https://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/accessibility/legislation/accessiblebc)

The [Diversity & Inclusion Strategy for the BC Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/diversity-inclusion/diversity-inclusion-strategy) outlines the committments of BC govenment in supporting inclusion, equitability and access throughout the province.

## 2.9. Legal Agreements
TBD

# End of Document












 
