---
layout: default
title: Mining Association of Canada (MAC) Governance Framework - Draft
parent: Applications
---

## Mining Association of Canada (MAC) Governance Framework - Draft

# 1. Primary Document

## 1.1. Introduction 

This document articulates the governance framework for the [Mining Association of Canada (MAC)](https://mining.ca/) as an actor involved in the verifiable credential exchanges [(layer four application of the Trust Over IP Foundation (ToIP) model)](https://www.trustoverip.org/wp-content/toip-model/).

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

The [Mining Association of Canada (MAC)](https://mining.ca/) is the Governing Authority responsible for this Governance Framework (GF). The contact information for MAC during the pilot phase of development is:

*   **Name:**  Katherine Gosselin
* 	**Title:** Director of Towards Sustainable Mining
* 	**Organization:** The Mining Association of Canada
* 	**Email:** [kgosselin@mining.ca](mailto:kgosselin@mining.ca)

## 1.5. Administering Authority

[Energy and Mines Digital Trust (EMDT)](https://digital.gov.bc.ca/case-studies/emdt) is the Administering Authority on behalf of the Mining Association of Canada (MAC) during the pilot phase of development.

The contact information for EMDT is:
* 	**Name:** Kyle Robinson 
* 	**Title:** Senior Strategic Advisor, Digital Trust Ecosystems
* 	**Organization:** Briartech Consulting Inc.
* 	**Email:** [kyle.robinson@briartech.ca](mailto:kyle.robinson@briartech.ca)

## 1.6. Purpose

The purpose of this governance framework is to describe the rules/policies/procedures for verifiable credential exchanges involving Mining Association of Canada (MAC) with the open global community. The purpose of the rules is to enable all actors to understand agreed upon standards, terminology and processes that allow the community to interact with MAC in a trusted manner. This will help determine a governing framework and operating model for a global ecosystem that identifies how credentials can be issued, held, and verified. 

## 1.7. Scope 

Mining Association of Canada (MAC) is a participant in an open ecosystem and the focus of this framework is to describe the process MAC uses for digital exchanges on Indy networks.

## 1.8. Objectives

MAC as an organization has the [objective](https://mining.ca/about-us/#:~:text=To%20contribute%20to%20building%20a,sound%20corporate%20and%20public%20policy.) to contribute to building a strong, sustainable and internationally competitive Canadian mining, minerals and metals industry with broad national support and to promote sound corporate and public policy.

MAC TSM describes the following overarching objectives in its [Theory of Change] (Insert static link if Ben is okay with this) 
1) Multi Stakeholder Engagement
2) Continual Improvement
3) Driving Change Across the Mining Industry
4) Credible Performance Reporting

Specific priorities associated with the above objectives include the following:
1. Drive continuous enhancement of on-site sustainability performance through strategic approaches.
2. Drive culture change within national mining industries, establishing processes for regular engagement and collaboration with a diverse set of individuals from national stakeholder and rights holder groups.
3. Encourage company progress from good practice to excellence via a multi-level rating system, supported by TSM protocols for benchmarking and target setting.
4. Enable industry-level monitoring, trend identification, and intervention by using comprehensive TSM reporting data from national mining associations and stakeholders.

## 1.9. Principles 

**Towards Sustainable Mining Guiding Principles**

[The Towards Sustainable Mining (TSM)](https://mining.ca/towards-sustainable-mining/) program created by the MAC has a set of [Guiding Principles](https://mining.ca/download/36658/), which all participating members must commit to. These [Guiding Principles](https://mining.ca/download/36658/), address the expectation of its members towards adopting social, economic and environmental practices that align with the priorities and values of their communities of interest. 

**MAC Mission and Vision Statement**

MAC is also guided by its [Mission and Vision](https://mining.ca/about-us/). The Mission of MAC is to contribute to building a strong, sustainable and internationally competitive Canadian mining, minerals and metals industry with broad national support and to promote sound corporate and public policy.The Vision Statement of MAC is to create a strong, responsible and globally competitive Canadian mining and mineral processing industry that creates wealth and opportunity for all Canadians.

**MAC Membership Principles and Goals**

Members of MAC are bound to adhere to the principles and goals set out in the [MAC Membership Overview](https://mining.ca/members-partners/become-a-member/#:~:text=Membership%20enables%20companies%20to%3A,Towards%20Sustainable%20Mining%20(TSM)%20program). 

*Branding Mining (the narrative)*:
The Canadian mining industry’s global presence and importance is known to Canadians and supported by 
government.
*CSR/Social License (reputation)*:
The mining industry is seen as a responsible actor committed to sustainable development in Canada and 
globally.
*Regulatory Efficiency (ability to build and operate mines)*:
A responsible and cost-effective regulatory framework.
*Economic Competitiveness*:
A competitive fiscal environment; a competitive, available and effective system of infrastructure; a skilled and 
ample workforce; and an open international trade and investment environment.
*Organizational and Operational Excellence*:
MAC is the respected, authoritative voice of the Canadian mining and mineral processing industry and an 
employer of choice

## 1.10. General Requirements
TBD

## 1.11. Revisions

In the MAC Business Advocacy and Government Relations Section, industry committees (i.e. Environment Committee) are made up of member representatives managed by MAC staff. Revisions occur through the committee process to develop positions that are reviewed and approved by the  [MAC Board of Directors](https://mining.ca/about-us/board-of-directors/).

## 1.12. Extensions

There are no extensions to this Governance Framework.

## 1.13. Schedule of Controlled Documents

N/A

# 2. Controlled Documents

## 2.1. Glossary
N/A

## 2.2. Risk Assessment

Risk Assessment is managed by MAC [COI Panel](https://mining.ca/towards-sustainable-mining/how-tsm-works/community-of-interest-advisory-panel/) process. The Issues Identification Process collects feedback and concerns from members to manage risk, which are then reduced into key issues. These issues are presented to industry members and non-industry members who prioritize these issues for solution and risk management. 

## 2.3. Trust Assurance and Certification

Trust Assurance and Certification is derived in part from [ICL](https://icl-group-sustainability.com/reports/voluntary-external-standards/).  The great majority of ICL’s production facilities are certified with [ISO standards](https://www.iso.org/iso-50001-energy-management.html#:~:text=ISO%2050001%20provides%20a%20framework,make%20decisions%20about%20energy%20use) or with equivalent standards for environmental management, safety and quality. All major energy consuming sites are certified with the energy ISO standard. ICL has developed [Reporting Standards](https://icl-group-sustainability.com/reports/gri-content-index/) and [Voluntary External Standards](https://icl-group-sustainability.com/reports/voluntary-external-standards/).  MAC is currently in the process of applying for community membership with ICL, which will then progress to full membership which involves peer review and external assurance of compliance. When complete, MAC will be able to claim ICL compliance through third party processes. 

Trust Assurance and Certification is also derived from [MAC COI Panels](https://mining.ca/towards-sustainable-mining/how-tsm-works/community-of-interest-advisory-panel/). The Community of Interest (COI) Advisory Panel is an independent, multi-interest group comprised of about 12 to 15 individuals from Aboriginal groups, communities where the industry is active, environmental and social NGOs, and labour and financial organizations. Select members of the MAC Board also sit on the Panel to provide a mining industry perspective to discussions.

Trust Assurance and Certification is derived from the **MUTUAL COOPERATION AND LICENSING AGREEMENT RESPECTING THE USE AND APPLICATION OF TSM**. The responsibilities outlined in Section 4 of the contract contribute to trust assurance by establishing clear roles, promoting consistent communication, allocating resources, and ensuring ongoing support and adherence to established standards. The division of responsibilities, commitment to transparency, and collaborative efforts collectively work to build trust in the implementation and operation of the TSM framework.

## 2.4. Governance Requirements

MAC Board of Directors

## 2.5. Business Requirements

### 2.5.1. Establishing connections

1. Mining Association of Canada (MAC) MUST send an invitation to the other business entity via email to initiate the exchange of information via digital wallet. 
2. The receiving party MUST accept invitation in order to establish a secure connection.

### 2.5.2. Annual MAC Membership Confirmation
Participation in the TSM initiative is mandatory for all MAC members for their Canadian operations, members MUST adhere to the [TSM reporting requirements](https://mining.ca/towards-sustainable-mining/protocols-frameworks/tsm-protocol-reporting-schedule/):

* Self-assessed TSM performance indicators MUST be reported to MAC annually using a presentation request. Amendments to this requirement are offered to high TSM performers and described in the [TSM Primer]( https://mining.ca/wp-content/uploads/dlm_uploads/2021/04/TSM-Primer-English.pdf) under the section labelled _Optional Reporting and Verification Process_

1. Using the established connection, Mining Association of Canada (MAC) MUST receive a verification request from the business entity. 
2. Continuing from step 1, the business entity MUST provide **all of the attributes** in the presentation proposal as outlined in the [TSM Protocol Credential Governance](https://github.com/bcgov/bc-vcpedia/blob/main/credentials/credential-tsm-protocol.md#261-schema-definition)
3. Mining Association of Canada (MAC) will receive and review the proposal consisting of self-assessed TSM performance scores or verified TSM performance scores.
4. Mining Association of Canada (MAC) will receive and review the proposal consisting of self-assessed TSM score information to determine that the condition of membership has been discharged.
5. Any clarification questions can be asked via the secure messaging function 
6. Annual self-assessments MUST be submitted through presentation requests
7. Once all data is submitted and correct, MAC will offer the credential to the business entity
8. Business entity can choose to accept or negotiate the credential to request changes


## 2.6. Technical Requirements

*MUST have an Aries compatible business wallet.*

## 2.7. Information Trust Requirements

•	[MAC Privacy of Information](https://mining.ca/privacy-information/)

## 2.8. Inclusion, Equitability and Accessibility Requirement
•	[MAC Advancing Diversity and Inclusion](https://mining.ca/advancing-diversity-and-inclusion-in-canadas-mining-sector/)

## 2.9. Legal Agreements
MAC is the owner of intellectual property that TSM consists of. MAC licenses TSM to industry associations that choose to adopt TSM based on the following agreement template: **MUTUAL COOPERATION AND LICENSING AGREEMENT RESPECTING THE USE AND APPLICATION OF TSM**. 

Industry adopters of TSM are also bound to agree and abide by the [TSM Claims and Labels Policy](https://mining.ca/resources/guides-manuals/tsm-claims-and-labels-policy-2023/). Claims and labels are the messages, logos and imagery used to communicate that an entity  meets a certain level of Towards Sustainable Mining (TSM) performance. Claims and labels may be used in marketing and communications materials, annual reports, and other media by companies and facilities that are members of associations implementing TSM. 

# End of Document












 
