---
layout: default
title: Mining Association of Canada (MAC) Governance Framework - Draft
parent: Applications
---

## Mining Association of Canada (MAC) Governance Framework - Draft

# 1. Primary Document

## 1.1. Introduction 

This document articulates the governance framework for the [Mining Association of Canada (MAC)](https://mining.ca/) as a participant in the open global community that exchanges verifiable credentials:
 - [(layer four application of the Trust Over IP Foundation (ToIP) model)](https://www.trustoverip.org/wp-content/toip-model/).

***Acknowledgements***
The development of this documentation follows the governance framework created by the [Trust over IP Foundation (ToIP)](https://trustoverip.org/) [Governance Metamodel Specification](https://trustoverip.org/wp-content/uploads/ToIP-Governance-Metamodel-Specification-V1.0-2022-12-21.pdf) created by the [Governance Stack Working Group (GSWG)](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group).

## 1.2. Terminology and Notation 

[Glossary - General Trust Over IP Terms](https://trustoverip.github.io/toip/glossary)

**Requirements** include any combination of machine-Testable Requirements and Human-Auditable Requirements. Unless otherwise stated, all Requirements MUST be expressed as defined in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

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

The [Mining Association of Canada (MAC)](https://mining.ca/) is the Governing Authority responsible for this Governance Framework (GF). The contact information for MAC during the pilot phase of development is:

*   **Name:**  Katherine Gosselin
* 	**Title:** Director of Towards Sustainable Mining
* 	**Organization:** The Mining Association of Canada
* 	**Email:** [kgosselin@mining.ca](mailto:kgosselin@mining.ca)

## 1.5. Administering Authority

The [Mining Association of Canada (MAC)](https://mining.ca/) is also responsible for administering this GF. The contact information for MAC during the pilot phase of development is:

*   **Name:**  Katherine Gosselin
* 	**Title:** Director of Towards Sustainable Mining
* 	**Organization:** The Mining Association of Canada
* 	**Email:** [kgosselin@mining.ca](mailto:kgosselin@mining.ca)

## 1.6. Purpose

The purpose of this GF is to describe the rules/policies/procedures for verifiable credential exchanges involving MAC with the open global community. This description enables participants to understand agreed-upon standards, terminology, and processes that allow the community to interact with MAC in a trusted manner. 

## 1.7. Scope 

MAC is a participant in an open ecosystem and the focus of this framework is to describe the process MAC uses for digital exchanges on Indy networks.

## 1.8. Objectives

MAC relies on its [Theory of Change](https://github.com/bcgov/bc-vcpedia/files/12563322/Theory.of.Change.-.TSM.pdf) philosophy to drive the following objectives:

1. Continuous enhancement of on-site sustainability performance through strategic approaches;
2. Encourage company progress from good practice to excellence via a multi-level rating system, supported by TSM protocols for benchmarking and target setting; and
3. Enable industry-level monitoring, trend identification, and intervention by using comprehensive TSM reporting data from national mining associations and stakeholders.


## 1.9. Principles 

**MAC Mission and Vision Statement**

Guided by its [Mission and Vision statements](https://mining.ca/about-us/), MAC members also adhere to the principles and goals set out in the [MAC Membership Overview](https://mining.ca/members-partners/become-a-member/#:~:text=Membership%20enables%20companies%20to%3A,Towards%20Sustainable%20Mining%20(TSM)%20program). 


## 1.10. General Requirements
[The Mining Association of Canada](https://mining.ca/) updates and manages this credential governance framework.

## 1.11. Revisions

Version 1.0. Revisions to this governance framework are managed by MAC executive leadership. 

## 1.12. Extensions

There are no extensions to this Governance Framework.

## 1.13. Schedule of Controlled Documents

N/A

# 2. Controlled Documents

## 2.1. Glossary
* [**MAC Board of Directors**](https://mining.ca/about-us/board-of-directors/): The Mining Association of Canada (MAC) is governed by a team of industry leaders from our membership who were selected for their breadth and depth of mining experience. Through their strategic guidance and oversight, these professionals collectively play a vital role in advancing the work of MAC and the industry at large.

## 2.2. Risk Assessment

[MAC Board of Directors](https://mining.ca/about-us/board-of-directors/) is the primary authority for determining the management of risk. 

## 2.3. Trust Assurance and Certification

MAC is a not-for-profit Canadian Corporation. MAC is governed by a set of Bylaws in accordance with the [Canada Not for Profit Corporations Act](https://laws-lois.justice.gc.ca/eng/acts/c-7.75/).

## 2.4. Governance Requirements

Governance Requirements stem from the [MAC Board of Directors](https://mining.ca/about-us/board-of-directors/)

## 2.5. Business Requirements

### 2.5.1. Establishing connections

1. MAC MUST send an invitation to the other business entity via email to initiate the exchange of information via digital wallet. 
2. The receiving party MUST accept the invitation in order to establish a secure connection.

### 2.5.2. Annual MAC Membership Confirmation
Participation in the TSM initiative is mandatory for all MAC members for their Canadian operations, members MUST adhere to the [TSM reporting requirements](https://mining.ca/towards-sustainable-mining/protocols-frameworks/tsm-protocol-reporting-schedule/):

* Self-assessed TSM performance indicators MUST be reported to MAC annually using a presentation request. Amendments to this requirement are offered to high TSM performers and described in the [TSM Primer]( https://mining.ca/wp-content/uploads/dlm_uploads/2021/04/TSM-Primer-English.pdf) under the section labeled _Optional Reporting and Verification Process_

1. Using the established connection, MAC MUST receive a verification request from the business entity. 
2. Continuing from step 1, the business entity MUST provide **all of the attributes** in the presentation proposal as outlined in the [TSM Protocol Credential Governance](https://github.com/bcgov/bc-vcpedia/blob/main/credentials/credential-tsm-protocol.md#261-schema-definition)
3. MAC will receive and review the proposal
4. Any clarification questions can be asked via the secure messaging function 
5. Annual self-assessments MUST be submitted through presentation requests to MAC
6. Upon receipt MAC will publish data publicly via their website

## 2.6. Technical Requirements

MAC uses a Hyperledger Aries-compatible business wallet, therefore mining operators MUST also use a Hyperledger Aries-compatible business wallet solution.

## 2.7. Information Trust Requirements

•	[MAC Privacy of Information](https://mining.ca/privacy-information/)

## 2.8. Inclusion, Equitability, and Accessibility Requirements
•	[MAC Advancing Diversity and Inclusion](https://mining.ca/advancing-diversity-and-inclusion-in-canadas-mining-sector/)

## 2.9. Legal Agreements

Not applicable.
 
# End of Document
