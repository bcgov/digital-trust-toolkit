---
title: BC Mines Act Permit - Published
---

# B.C. Mines Act Permit Credential - Published

# 1. Primary Document

## 1.1 Introduction

[The Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01) regulates mining activities in British Columbia (B.C.) A permit must be in place before any work in, on, or about a mine in B.C. can occur. 
A B.C. Mines Act Permit credential published according to this Governance Framework (GF) provides evidence that a mining permit has been issued to a registered business in the province of B.C.

A published B.C. Mines Act Permit credential uses verifiable credential technology in the format of [JSON-LD](https://json-ld.org/), or JavaScript Object Notation, which expresses data that is both human and machine-readable in such a way that it can be linked. An important feature of publishing public data using JSON-LD is the ability to enable compliance with international standards like the [UN Transparency Protocol (UNTP)](https://uncefact.github.io/spec-untp/).

Further information about B.C. mines and permits can be found online: 
 - [B.C. Mine Information](https://mines.nrs.gov.bc.ca/) 
 - [B.C. Mine Permitting](https://www2.gov.bc.ca/gov/content/industry/mineral-exploration-mining/permitting)

***Acknowledgements***:
The development of this documentation follows the governance framework created by the [Trust over IP Foundation (ToIP)](https://trustoverip.org/) [Governance Metamodel Specification](https://trustoverip.org/wp-content/uploads/ToIP-Governance-Metamodel-Specification-V1.0-2022-12-21.pdf) created by the [Governance Stack Working Group (GSWG)](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group).

***No Warranty***:
The Mines Act Permit Credential is provided “as is”, and the Province of British Columbia (the "Province") disclaims all representations, warranties, conditions, obligations, and liabilities of any kind, whether express or implied, in relation to the Mines Act Permit Credential, including without limitation implied warranties with respect to merchantability, satisfactory quality, fitness for a particular purpose and non-infringement. Without limiting the general nature of the previous sentence, the Province does not represent or warrant that:
 - (a). the Mines Act Permit Credential will be available;
 - (b) your use of the Mines Act Permit Credential will be timely, uninterrupted or error-free;
 - (c) any errors in the Mines Act Permit Credential will be corrected; or
 - (d) the Mines Act Permit Credential will meet your expectations and requirements.

 ***Limitation of Liability***:
 To the maximum extent permitted by applicable law, under no circumstances will the Province be liable to you, to any other individual or to any entity for any direct, indirect, special, incidental, consequential or other loss, claim, injury or damage, whether foreseeable or unforeseeable (including without limitation claims for damages for loss of profits or business opportunities, use or misuse of, or inability to use, the Mines Act Permit Credential, interruptions, deletion or corruption of files, loss of programs or information, errors, defects or delays) arising out of or in any way connected with your use of the Mines Act Permit Credential and whether based on contract, tort, strict liability or any other legal theory. The previous sentence will apply even if the Province has been specifically advised of the possibility of any such loss, claim, injury or damage.

## 1.2. Terminology and Notation

Please reference [Glossary - General Trust Over IP Terms](https://glossary.trustoverip.org/).

**Requirements** include any combination of Machine-Testable Requirements and Human-Auditable Requirements. Unless otherwise stated, all Requirements MUST be expressed as defined in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

- Mandates are Requirements that use a MUST, MUST NOT, SHALL, SHALL NOT, or REQUIRED keyword.
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

The Chief Permitting Officer (CPO) is the governing authority responsible for this GF as defined in section 8.2 of [the Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01#section8.2). The CPO may delegate in writing to an inspector any of the powers conferred on the CPO under [the Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01).

The contact information for the CPO is: 
* 	**Name:** Lowell Constable
* 	**Title:** Executive Director and Deputy Chief Inspector
* 	**Organization:** Major Mines Office
* 	**Email:** Lowell.Constable@gov.bc.ca

## 1.5. Administering Authority

The Mines Digital Services (MDS) team is the administering authority responsible for this GF. MDS has replaced the legacy Mine Management System (MMS) with a suite of scalable, open-source, and data-driven technologies to support mine oversight in B.C.

The contact information for MDS is: 
* 	**Name:** Rebecca Stevenson
* 	**Title:** Project Owner
* 	**Organization:** Mines Digital Services
* 	**Email:** rebecca.stevenson@gov.bc.ca

## 1.6 Purpose 

The purpose of this GF is to define what the published B.C. Mines Act Permit credential is and who is responsible for the authority and administration of its use. 

## 1.7 Scope

A B.C. Mines Act Permit credential published according to this GF provides evidence of permit issuance and summary permit information. The initial scope of the B.C. Mines Act Permit credential is limited to operating permits of major mines in B.C. and is compliant with UNTP version 0.5.0 as a [Digital Conformity Credential (DCC)](https://uncefact.github.io/spec-untp/docs/specification/ConformityCredential).

## 1.8 Objectives 

To publish evidence that a B.C. Mines Act permit has been issued to a registered business within the province in a JSON-LD verifiable credential format that is both discoverable and verifiable.  

## 1.9 Principles 

[The B.C. Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/ethics-standards-of-conduct/corporate-values) has one overarching corporate value, __Integrity__, and 6 core corporate values: Curiosity, Service, Passion, Teamwork, Accountability, and Courage. __Integrity__ is placed above all the other values as a quality that affirms the [Standards of Conduct for the B.C. Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/ethics-standards-of-conduct/standards-of-conduct).

## 1.10 General Requirements

Mining activities in British Columbia are subject to a variety of different provincial and federal enactments. Mining permits MUST be issued by the ministry responsible for mining activities through the authority of the Chief Permitting Officer (CPO) under [section 10 of the Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01#section10).

## 1.11. Revisions

Version 1.0. 

## 1.12. Extensions

There are no extensions to this GF.  

## 1.13. Schedule of Controlled Documents

N/A

# 2. Controlled Documents

## 2.1. Glossary
 - [ToIP Core Glossary](https://glossary.trustoverip.org/)
 - [UNTP Conformity Credential ](https://jargon.sh/user/unece/ConformityCredential/v/0.5.0/artefacts/readme/render)
 - [Verifiable Credentials Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/#json-ld)
 - [B.C. Mines Act Definitions](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01#section1)
   - **Credential Holders**: The holder of a credential issued under [section 10 of the Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01#section10)
   -  **Major Mines**: Moderate to large-scale mineral and coal mining operations.
   -  	**Major Mines Office (MMO)**: The branch within the Ministry responsible for managing and issuing construction and operations permits under [section 10 of the Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01#section10) for major mines in B.C.

## 2.2. Risk Assessment
In accordance with B.C. government procedures and policies, the standard [Privacy Impact Assessment (PIA)](https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/privacy/privacy-impact-assessments) and [Security Threat and Risk Assessment (STRA)](https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/information-security/security-threat-and-risk-assessment) processes have been completed for the use of this credential technology.

## 2.3. Trust Assurance and Certification
Development of digital technology is led by [British Columbia’s Digital Code of Practice](https://digital.gov.bc.ca/resources/digital-principles), applicable to all public service employees and contractors involved in and accountable for digital service delivery.

## 2.4. Governance Requirements

Legislation and regulations govern the disposition, administration, and management of mines in B.C. 
[The Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01).

- **[B.C. Mine Information](https://mines.nrs.gov.bc.ca/)**
- **[B.C. Mine Authorizations](https://mines.nrs.gov.bc.ca/authorizations)**

## 2.5. Business Requirements

The primary use of the B.C. Mines Act Permit credential is for credential holders within B.C. to provide evidence of permit issuance from the province according to [B.C. Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01). 

## 2.6. Technical Requirements (Credential)
The format for this credential is [JSON-LD specification](https://www.w3.org/TR/json-ld11/) and is compliant with [Verifiable Credentials Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/#json-ld)

## 2.6.1 Context Files
- [BCMinesActPermit, version 1](https://github.com/bcgov/digital-trust-toolkit/blob/main/related_resources/contexts/BCMinesActPermit/v1.jsonld)
  - which extends the Digital Conformity Credential of [UNTP, version 0.5.0](https://test.uncefact.org/vocabulary/untp/dcc/0.5.0/)

### 2.6.2 Issuers
Chief Permitting Officer (Mines Act)
 - [did:web:registry-test.digitaltrust.gov.bc.ca:mines-act:chief-permitting-officer (TEST)](https://dev.uniresolver.io/#did:web:registry-test.digitaltrust.gov.bc.ca:mines-act:chief-permitting-officer)

### 2.6.3 Overlays Capture Architecture (OCA) Bundle
Currently under development.

## 2.7. Information Trust Requirements
Not applicable.

## 2.8. Inclusion, Equitability, and Accessibility Requirements

The [Accessible British Columbia Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/21019) informs [**AccessibleBC**](https://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/accessibility/legislation/accessiblebc).

The [Diversity & Inclusion Strategy for the BC Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/diversity-inclusion/diversity-inclusion-strategy) outlines the commitments of BC government in supporting inclusion, equitability and access throughout the province.

The [Declaration on the Rights of Indigenous Peoples Act (Declaration Act)](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/19044) establishes the United Nations Declaration on the Rights of Indigenous Peoples (UN Declaration) as B.C.’s framework for reconciliation that respects the human rights of Indigenous Peoples.

## 2.9. Legal Agreements
Not applicable.

# End of Document
