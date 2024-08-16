---
title: BC Court Services Branch
---

# B.C. Court Services Branch Governance Framework

# 1. Primary Document

## 1.1 Introduction

This document articulates the governance framework for British Columbia (B.C.) Court Services Branch (CSB) as a participant in the open global community that exchanges verifiable credentials:
 - [(Layer Four Application of the Trust Over IP Foundation (ToIP) Model)](https://www.trustoverip.org/wp-content/toip-model/)

***Acknowledgements***
The development of this documentation follows the governance framework created by the [Trust over IP Foundation (ToIP)](https://trustoverip.org/) [Governance Metamodel Specification](https://trustoverip.org/wp-content/uploads/ToIP-Governance-Metamodel-Specification-V1.0-2022-12-21.pdf) created by the [Governance Stack Working Group (GSWG)](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group).

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

[The Court Services Branch (CSB)](https://www2.gov.bc.ca/gov/content/justice/courthouse-services/courthouse-roles/court-feedback) is the governing authority responsible for this Governance Framework (GF). 

* 	**Name:** TBD
* 	**Title:** TBD
* 	**Organization:** Court Services Branch
* 	**Email:** TBD

## 1.5. Administering Authority

[The Court Services Branch (CSB)](https://www2.gov.bc.ca/gov/content/justice/courthouse-services/courthouse-roles/court-feedback) is the administering authority responsible for this Governance Framework (GF). 

* 	**Name:** TBD
* 	**Title:** TBD
* 	**Organization:** Court Services Branch
* 	**Email:** TBD

## 1.6 Purpose 

The purpose of this governance framework is to describe the rules/policies/procedures for verifiable credential exchanges involving B.C. Court Services Branch (CSB) with the open global community. This description enables participants to understand agreed-upon standards, terminology, and processes that allow the community to interact with the CSB in a trusted manner. 

## 1.7 Scope

The Court Services Branch (CSB) is a participant in an open ecosystem and the focus of this framework is to describe the processes CSB uses for digital credential exchanges.

## 1.8 Objectives 

1) Outline legislative and administrative processes relevant to digital credential exchanges.
2) Support digital business interaction/automation within the B.C. justice ecosystem.

## 1.9 Principles 

[The BC Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/ethics-standards-of-conduct/corporate-values) has one overarching corporate value, __Integrity__, and 6 core corporate values: Curiosity, Service, Passion, Teamwork, Accountability, and Courage. __Integrity__ is placed above all the other values as a quality that affirms the [Standards of Conduct for the B.C. Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/ethics-standards-of-conduct/standards-of-conduct).

## 1.10 General Requirements
Mining activities in British Columbia are subject to a variety of different provincial and federal regulations. The main pieces of legislation that govern major mines in B.C. are the [Environmental Assessment Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/18051), [the Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01) and [the Environmental Management Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/03053_00).
- **[B.C. Mine Information](https://mines.nrs.gov.bc.ca/)**
- **[B.C. Mine Authorizations](https://mines.nrs.gov.bc.ca/authorizations)**

## 1.11. Revisions

Version 1.0. 

## 1.12. Extensions

There are no extensions to this GF.  

## 1.13. Schedule of Controlled Documents

N/A

# 2. Controlled Documents

## 2.1. Glossary
[ToIP Core Glossary](https://trustoverip.github.io/toip/glossary)

[BC Glossary of Criminal Justice Terms](https://www2.gov.bc.ca/gov/content/justice/criminal-justice/bcs-criminal-justice-system/justice-terms)

## 2.2. Risk Assessment

In accordance with B.C. Government procedures and policies, the standard [Privacy Impact Assessment (PIA)](https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/information-security/security-threat-and-risk-assessment) and [Security Threat and Risk Assessment (STRA)](https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/information-security/security-threat-and-risk-assessment) processes have been completed for the use of this credential technology.

## 2.3. Trust Assurance and Certification

Development of digital technology is led by [British Columbia’s Digital Code of Practice](https://digital.gov.bc.ca/resources/digital-principles), applicable to all public service employees and Contractors involved in and accountable for digital service delivery.

## 2.4. Governance Requirements
The operations and processes of the Court Services Branch are governed by the [Court Rules Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96080_01). 
Further information on Court Services Branch operations is available at: [Courthouse Services](https://www2.gov.bc.ca/gov/content/justice/courthouse-services)

## 2.5. Business Requirements

## 2.5.1. Establishment of Connection

1. The CSB Administrator MUST conduct an online meeting with the Contractor to establish identity.
1. After establishing trust the Contractor is the correct person associated to the contract, the CSB Administrator MUST select the user in the User Management screen of the Access to Court Materials (ACM) application to display the connect button for connecting to the Contractor's BC Wallet.
1. The CSB Administrator WILL present the screen with the QR code (via screen sharing) for the Contractor to scan the QR code with their BC Wallet App.
1. The Contractor MUST accept the connection request in the BC Wallet App. (If successful, the CSB Administrator can stop sharing screen at this point.)
1. ACM will use the Traction tenant to perform the App Attestation proof request check to ensure this connection is with the official BC Wallet App. If the check fails, the connection is deleted and an error returned to the ACM application.

## 2.5.2. CSB Contractor Credential Issuance

1.	The CSB Administrator MUST select the user in the User Management screen of the Access to Court Materials (ACM) application to display the issue button for issuing the Contractor Credential (TODO add link to GF).
1. The CSB Administrator MUST indicate to issue the credential to the user.
1.	Traction SHALL offer the credential to the Contractor’s BC Wallet App.
1.	BC Wallet MUST display offer details to the Contractor. 
1.	The Contractor MUST review the credential offer.
1.	The Contractor MUST either Accept/Decline the offer. 
1.	Traction MUST receive a problem report if the credential is declined.
1.	Traction MUST notify ACM if the offer is accepted or declined.

## 2.5.3. Access to Audio (A2A) Verification

1.	The Contractor WILL launch the A2A website with the specified URL.
1. The A2A website MUST display a QR code with the proof request to check the Contractor is valid (see section 2.6 for details).
1.	The Contractor MUST review the proof details in the BC Wallet App.
1.	The Contractor MUST indicate to Share the details for the proof to be successful.
1.	Traction MUST check the proof is valid.
1.	Traction MUST send a problem report to ACM if the proof is invalid.
1.	Traction MUST semd a success notification to ACM if the proof is valid.
2.	If the proof is valid, A2A will allow the Contractor to access the A2A application.
   
## 2.6. Technical Requirements
The Court Services Branch uses a Hyperledger Aries-compatible business wallet, therefore Contractors MUST also use a Hyperledger Aries-compatible  wallet solution, specifically the BC Wallet App:
- [CANdy](https://candyscan.idlab.org/home/CANDY_DEV) Production Ledger: [A2UZSmrL9N5FDZGPu68wy](https://candyscan.idlab.org/tx/CANDY_PROD/domain/321)

## 2.6.1 Access to Audio (A2A) Proof Request Details
The proof request uses the Contractor Credential (TODO add link) to allow Contractors to access the A2A application is defined as:
1. Attributes requested: Contractor Credential: user_id, Contractor Credential: contract_number
1. Predicate checks: Contractor Credential: today >= contract_start_dateint, Contractor Credential: today <= contract_end_dateint, Contractor Credential: today <= criminal_record_expiry_dateint
1. Restrictions: Contractor Credential: Issuer is CSB (use production CSB cred_def listed above)

## 2.7. Information Trust Requirements

The [Freedom of Information and Protection of Privacy Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96165_00) sets out the access and privacy rights of individuals as they relate to the public sector in British Columbia.

## 2.8. Inclusion, Equitability, and Accessibility Requirements

The [Accessible British Columbia Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/21019) informs [**AccessibleBC**](https://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/accessibility/legislation/accessiblebc)

The [Diversity & Inclusion Strategy for the BC Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/diversity-inclusion/diversity-inclusion-strategy) outlines the commitments of BC government in supporting inclusion, equitability and access throughout the province.

The [Declaration on the Rights of Indigenous Peoples Act (Declaration Act)](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/19044) establishes the United Nations Declaration on the Rights of Indigenous Peoples (UN Declaration) as BC’s framework for reconciliation that respects the human rights of Indigenous Peoples.

## 2.9. Legal Agreements

[Mines Act Permit Credential Terms of Use](../../credentials/bc-mines-act-permit/1.1.1/2023-11-23%20MAP%20TOU%20V1%20Final.pdf)

# End of Document

