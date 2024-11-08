---
title: Law Society of BC
---

# Law Society of BC Governance Framework

# 1. Primary Document

## 1.1 Introduction

This document articulates the Governance Framework (GF) for Law Society of BC (LSBC) as a participant in the open global community that exchanges verifiable credentials:
 - [(Layer Four Application of the Trust Over IP Foundation (ToIP) Model)](https://www.trustoverip.org/wp-content/toip-model/)

***Acknowledgements***
The development of this documentation follows the governance framework created by the [Trust over IP Foundation (ToIP)](https://trustoverip.org/) [Governance Metamodel Specification](https://trustoverip.org/wp-content/uploads/ToIP-Governance-Metamodel-Specification-V1.0-2022-12-21.pdf) created by the [Governance Stack Working Group (GSWG)](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group).

## 1.2. Terminology and Notation

Please reference [Glossary - General Trust Over IP Terms](https://trustoverip.github.io/toip/glossary).

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

The standard language for this Governance Framework (GF) is English.

## 1.4 Governing Authority

The TODO, Law Society of BC is the governing authority responsible for this Governance Framework (GF). 

* 	**Name:** TODO
* 	**Title:** TODO
* 	**Organization:** Law Society of BC
* 	**Email:** TODO

## 1.5. Administering Authority

The TODO, Law Society of BC is the administering authority responsible for this Governance Framework (GF). 

* 	**Name:** TODO
* 	**Title:** TODO
* 	**Organization:** Law Society of BC
* 	**Email:** TODO

## 1.6 Purpose 

The purpose of this Governance Framework is to describe the rules/policies/procedures for verifiable credential exchanges involving Law Society of BC (LSBC) with the open global community. This description enables participants to understand agreed-upon standards, terminology, and processes that allow the community to interact with the LSBC in a trusted manner. 

## 1.7 Scope

The Law Society of BC (LSBC) is a participant in an open ecosystem and the focus of this framework is to describe the processes LSBC uses for digital credential exchanges.

## 1.8 Objectives 

1) Outline administrative processes relevant to digital credential exchanges.
2) Support digital business interaction/automation within the B.C. justice ecosystem.

## 1.9 Principles 

TODO Maybe this??? [LSBC Priorities](https://www.lawsociety.bc.ca/about-us/priorities/)

## 1.10 General Requirements
N/A

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
The operations and processes of the Law Society of BC are governed by the following Acts:
* [Legal Professions Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/24026)
NOTE: This Act is currently undergoing changes as of November 8, 2024

## 2.5. Business Requirements

## 2.5.1. Establishment of Connection
1. The legal professional MUST login to the Law Society Member Portal with their username and password. [LSBC Memmber Portal](https://www.lawsociety.bc.ca/lsbc/apps/members/login.cfm)
1. The legal professional MUST ... TODO
1. The LSBC Member Portal WILL present the screen with the QR code for the legal professional to scan the QR code with their BC Wallet App.
1. The legal professional MUST accept the connection request from "Law Society of BC" in the BC Wallet App.
1. The LSBC Member Portal WILL use the Traction tenant integration to perform the App Attestation proof request check to ensure this connection is with the official BC Wallet App. If the check fails, the connection is deleted and an error is returned to the LSBC Member Portal.

## 2.5.2. Legal Professional Credential Issuance
1.	The legal professional MUST click the "Credentials" button in the LSBC Member Portal to display the issue button for issuing a Legal Professional Credential using the [Professional Credential](../../employment/professional-credential/governance.md) schema.
1. The legal professional MUST click "issue" to issue the credential to wallet.
1.	Traction SHALL offer the credential to the legal professional's connected BC Wallet App.
1.	BC Wallet MUST display offer details to the legal professional. 
1.	The legal professional MUST review the credential offer.
1.	The legal professional MUST either Accept/Decline the offer. 
1.	Traction MUST receive a problem report if the credential is declined.
1.	Traction MUST notify the LSBC Member Portal if the offer is accepted or declined.

## 2.5.3. Legal Professional Remove Connection and Revoke Credentials
In some cases, the LSBC Administrator will need to remove the connection and revoke the Legal Professional Credential.
1. The LSBC Administrator MUST select the user in the User Management screen of the Access to Audio (A2A) application to display the remove button for removing the connection and revoke the Contractor Credential.
2. The LSBC Administrator MUST indicate to remove and revoke.
3. Traction MUST revoke all credentials known to be issued to the connection.
4. Traction MUST remove the connection information associated to the user in the LSBC Tenant.

## 2.6. Technical Requirements
The Law Society of BC uses a Hyperledger Aries-compatible business wallet. Therefore, Contractors MUST also use a Hyperledger Aries-compatible wallet solution, specifically the BC Wallet App.

Ledger details are as follows:
|Environment|Ledger|Public DID|Credential Definitions|
|---|---|---|---|
|Production|TODO - CANdy Prod | TODO | TODO |
|Development|TODO - CANdy Dev | TODO | TODO |
 
## 2.6.1 Transcriber Credential Issuance Details
### Credential Definition Configuration:
1. Lawyers are issued credentials where:
1.1 Schema is [Professional Credential](../../employment/contractor-credential/governance.md)
1.1 Tag for the credential definition is "lawyer"
1.1 Credential definition is revocable

1. Paralegals are issued credentials where:
1.1. Schema is [Professional Credential](../../employment/contractor-credential/governance.md)
1.1. Tag for the credential definition is "paralegal"
1.1. Credential definition is revocable

1. Notaries Public are issued credentials where:
1.1 Schema is [Professional Credential](../../employment/contractor-credential/governance.md)
1.1 Tag for the credential definition is "notary-public"
1.1 Credential definition is revocable

### Mapping:
The Legal Professional Credential issued to legal professionals is mapped as:
1. Last Name = family_name
2. First Name = given_names
TODO

### OCA:
TODO
[OCABundles/schema/bcgov-digital-trust/transcriber-contractor/README.md](https://github.com/bcgov/aries-oca-bundles/blob/main/OCABundles/schema/bcgov-digital-trust/transcriber-contractor/README.md)

## 2.7. Information Trust Requirements

The [Freedom of Information and Protection of Privacy Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96165_00) sets out the access and privacy rights of individuals as they relate to the public sector in British Columbia.

## 2.8. Inclusion, Equitability, and Accessibility Requirements

The [Accessible British Columbia Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/21019) informs [**AccessibleBC**](https://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/accessibility/legislation/accessiblebc)

The [Diversity & Inclusion Strategy for the BC Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/diversity-inclusion/diversity-inclusion-strategy) outlines the commitments of BC government in supporting inclusion, equitability, and access throughout the province.

The [Declaration on the Rights of Indigenous Peoples Act (Declaration Act)](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/19044) establishes the United Nations Declaration on the Rights of Indigenous Peoples (UN Declaration) as BC’s framework for reconciliation that respects the human rights of Indigenous Peoples.

## 2.9. Legal Agreements
N/A

# End of Document
