---
title: Tenure and Resource Stewardship Branch Governance Framework - Draft
---

# Tenure and Resource Stewardship Branch Governance Framework

# 1. Primary Document

## 1.1. Introduction 

This document articulates the governance framework for [The Tenure and Resource Stewardship Branch (TRSB)](https://www2.gov.bc.ca/gov/content/industry/natural-gas-oil/petroleum-natural-gas-tenure) as a participant of the open global community that exchanges verifiable credentials [(layer four application of the Trust Over IP Foundation (ToIP) model)](https://www.trustoverip.org/wp-content/toip-model/).

***Acknowledgements***:
The development of this documentation follows the governance framework created by the [Trust over IP Foundation (ToIP)](https://trustoverip.org/) [Governance Metamodel Specification](https://trustoverip.org/wp-content/uploads/ToIP-Governance-Metamodel-Specification-V1.0-2022-12-21.pdf) created by the [Governance Stack Working Group (GSWG)](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group).

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

[The Tenure and Resource Stewardship Branch (TRSB)](https://www2.gov.bc.ca/gov/content/industry/natural-gas-oil/petroleum-natural-gas-tenure) is the governing authority and party responsible for developing, maintaining, and implementing the Governance Framework (GF). 

## 1.5. Administering Authority

[Energy and Mines Digital Trust (EMDT)](https://digital.gov.bc.ca/2024/06/25/energy-mines-digital-trust-pilot/) is the Administering Authority on behalf of TRSB during the pilot phase of development.

The contact information for EMDT is:
* 	**Name:** Nancy Norris
* 	**Title:** Senior Director, ESG & Digital Trust
* 	**Organization:** [Energy and Mines Digital Trust](https://digital.gov.bc.ca/2024/06/25/energy-mines-digital-trust-pilot/), Ministry of Energy, Mines and Low Carbon Innovation
* 	**Email:** [emdt@gov.bc.ca](mailto:emdt@gov.bc.ca)

## 1.6. Purpose

The purpose of this governance framework is to describe the rules/policies/procedures for verifiable credential exchanges involving the Tenure and Resource Stewardship Branch (TRSB) with the open global community. The purpose of the rules is to enable all actors to understand agreed-upon standards, terminology, and processes that allow the community to interact with TRSB in a trusted manner. This will help determine a governing framework and operating model for a global ecosystem that identifies how credentials can be issued, held, and verified. 

## 1.7. Scope 
The Tenure and Resource Stewardship Branch (TRSB) is a participant in an open ecosystem and the focus of this framework is to describe the process TRSB uses for digital exchanges on Indy networks.

## 1.8. Objectives

1) Outline legislative and administrative processes relevant to digital credential exchanges.
2) Support digital business interaction/automation within the B.C. energy ecosystem.

## 1.9. Principles 

[The BC Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/ethics-standards-of-conduct/corporate-values) has one overarching corporate value, __Integrity__, and 6 core corporate values: Curiosity, Service, Passion, Teamwork, Accountability, and Courage. __Integrity__ is placed above all the other values as a quality that affirms the [Standards of Conduct for the BC Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/ethics-standards-of-conduct/standards-of-conduct).

## 1.10. General Requirements
TBD

## 1.11. Revisions
Draft version

## 1.12. Extensions

There are no extensions to this Governance Framework.

## 1.13. Schedule of Controlled Documents
TBD

# 2. Controlled Documents

## 2.1. Glossary

[ToIP Core Glossary](https://trustoverip.github.io/toip/glossary)
*  **Credential Holders**: BC Petroleum and Natural Gas Operators
*  **Title Holder**: In the [BC Petroleum & Natural Gas Title Credential Governance](https://github.com/bcgov/bc-vcpedia/blob/main/credentials/credential-bc-petroleum-natural-gas-title.md), the term title holder is used to reference a person and/or a company in whose name a PNG title document is recorded in the division records.

## 2.2. Risk Assessment

TBD

## 2.3. Trust Assurance and Certification

Development of digital technology is led by [British Columbia’s Digital Code of Practice](https://digital.gov.bc.ca/resources/digital-principles), applicable to all public service employees and contractors involved in and accountable for digital service delivery.

## 2.4. Governance Requirements

## 2.5. Business Requirements

## 2.5.1. Establishment of Connection - Anoncred Credential Format

1. The Tenure and Resource Stewardship Branch (TRSB) MUST send an invitation to the other business entity via email to initiate the exchange of information. 
2. The receiving party MUST use the invitation in order to establish a secure connection.

## 2.5.2. Issuance of BC Petroleum & Natural Gas Title Credential  - Anoncred Credential Format

Using the established connection, TRSB MUST issue a credential to the business entity.

1. TRSB MUST enter in the data for each of the credential attributes as outlined in the [BC Petroleum & Natural Gas Title Credential Governance](https://github.com/bcgov/bc-vcpedia/blob/main/credentials/credential-bc-petroleum-natural-gas-title.md#261-schema-definition)
3. TRSB SHALL offer the credential to the title holder
4. Any clarification questions MAY be asked via the secure messaging function
5. The title holder MAY choose to accept or negotiate the credential to request changes

## 2.6. Technical Requirements

Technical requirements include both Json-LD and Anoncred formats to enable interoperability with multiple credential formats: 

The Json-LD credential format is designed to meet W3C VCDM 2.0 requirements and is modeled for compliance with the [UN Transparency Protocol](https://uncefact.github.io/spec-untp/docs/about/) [Digital Conformity Credential](https://uncefact.github.io/spec-untp/docs/specification/ConformityCredential).

The Anoncreds credential format enables the exchange of credential data between digital wallets once a trusted connection is established. 

## 2.6.1. Public DID of Tenure and Resource Stewardship Branch (TRSB)

*Please note that the domain **digitaltrust.gov.bc.ca**  is currently under review, the following DID identifier is a placeholder until approval is granted*:

DID: [did:web:test.digitaltrust.traceability.site:petroleum-and-natural-gas-act:director-of-petroleum-lands](https://test.digitaltrust.traceability.site/petroleum-and-natural-gas-act/director-of-petroleum-lands/did.json)

Ledger | DID |
--- | --- |
BCovrin Test | 4uVA6nbXMGWYLE6hq99aDa |

## 2.7. Information Trust Requirements

The [Freedom of Information and Protection of Privacy Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96165_00) sets out the access and privacy rights of individuals as they relate to the public sector in British Columbia.

## 2.8. Inclusion, Equitability, and Accessibility Requirements

The [Accessible British Columbia Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/21019) informs [**AccessibleBC**](https://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/accessibility/legislation/accessiblebc)

The [Diversity & Inclusion Strategy for the BC Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/diversity-inclusion/diversity-inclusion-strategy) outlines the committments of BC govenment in supporting inclusion, equitability and access throughout the province.

The [Declaration on the Rights of Indigenous Peoples Act (Declaration Act)](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/19044) establishes the United Nations Declaration on the Rights of Indigenous Peoples (UN Declaration) as BC’s framework for reconciliation that respects the human rights of Indigenous Peoples.

## 2.9. Legal Agreements
TBD

# End of Document












 
