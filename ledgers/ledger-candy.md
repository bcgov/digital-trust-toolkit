# Document Information
## Authors
- John Kirby, IBM, [@JohnKirbyIBM](https://github.com/JohnKirbyIBM)
- Andrei Saikouski, IBM [@andreisaikouski](https://github.com/andreisaikouski)
- David Stirling, IBM [@dstirling01](https://github.com/dstirling01)

## Contributors
- Kyle Robinson [@krobinsonca](https://github.com/krobinsonca) (British Columbia)
- John Ouilette, IBM
- Charles Macpherson (British Columbia)
- Nancy Norris (British Columbia)
- Oliver Jones (British Columbia)
- John Jordan (British Columbia)
- Wade Barnes (British Columbia)
- Donato Coladipietro (Ontario)
- Aisosa Ebomoyi (Ontario)
- Marco-Olivier Deschênes-Rompré (Quebec)
- Peter John Grant Gignac (Quebec)
- Stéphanie Laplante (Quebec)
- Philippe Bourque (Quebec)
- Sylvain Martel (Quebec)
- Philippe Foucault (Quebec)

## Revision History
Version | Date | Revisions | Author
--- | ---- | --------- | ----
0.1 | May 24, 2022 | Initial page creation and set up | Andrei Saikouski, IBM
0.2 | May 30, 2022 | Draft Update | Andrei Saikouski and John Kirby, IBM
0.3 | July 12, 2022 | Final Draft of Provisional Governance Framework | Andrei Saikouski, David Stirling, and John Kirby, IBM
0.4 | July 26, 2022 | Minor edits | Charles Macpherson, British Columbia

# Primary Document
## Introduction
This governance framework document has been developed in accordance with the [Trust Over IP's Governance Metamodel Specification](https://trustoverip.org/permalink/ToIP-Governance-Metamodel-Specification-V1.0-2021-12-21.pdf).
This framework has been developed by select representatives from the Provinces of British Columbia, Ontario, and Quebec in collaboration with IBM Consulting and others as an example Layer 1 governance framework for the CANdy Verifiable Credential Utility.

## Purpose
The purpose of the CANdy Provisional Governance Framework is to set in place the principles, scope, roles, and policies that enable the governance, operation, and use of Canada's public sector Digital Trust and Identity Network, CANdy, which will support Verifiable Credentials that can create trust in online digital interactions and with the digital economy in Canada.

## Objectives

The objectives of the CANdy Provisional Governance Framework are as follows:
* Define a governance model that supports the initialization of the network and subsequent on-boarding of Members and the deployment of CANdy nodes.
* Enable the creation of the CANdy Governing Board and its administration over CANdy and its governed roles.
* Demonstrate the applicability of this governance framework to real-world use-cases following initialization of CANdy.
* Provide a network governance model that enables CANdy to reliably provide trusted, identifying information about Canadian credential issuers and the credentials they issue.
* Elevate trust in the network by publicly exposing who endorsed specific transactions and what those transactions contained without sharing sensitive data.
* Define a model that maintains each Member’s sovereignty, within their existing authorities, and supports the shared, collective operation and governance of the CANdy network. 
* Define the foundational rules & policies for the operation of the CANdy network and its nodes.
* Identify unique role-types which operate or use the CANdy network and define governing policies for those roles which will enable trust and security in its use and operation.
* Encourage an increase in the number of participating Members and Non-Members in the governance, operation, and use of the CANdy network. 

## Guiding Principles

The following principles guide the development of policies in the CANdy Governance Framework:

### Shared Governance Model
The CANdy Network recognizes that the governance, operation, and use of a distributed ledger for Canadian government entities requires a shared governance model between and among Members. The CANdy Governing Board shall act in the collective best interest of all Members and Registered Entities and within the spirit of this Framework. 

### Member Sovereignty
While the CANdy Network has a shared governance model, the CANdy Governing Board shall define policies that allow Members to have sovereign decision-making rights within their existing authorities as defined in this governance framework. The intent of this framework is to maximize the independent operation and use of the CANdy Network by its Members.

### Openness & Interoperability 
CANdy shall use Open Standards and avoid mechanisms that would prevent users from having interoperability or portability of their data both within the CANdy network and with other networks and systems.

### Accountability
All CANdy governed roles and entities shall be accountable to each other for conformance to the purpose, principles, and policies of the CANdy Governance Framework. All governed roles shall be responsible for -and be able to demonstrate compliance with - any other requirements of applicable law.

## Scope

### Member Types

The governed member types in the CANdy trust community are as follows:
* [Member](#governed-member-type-policies-member)

* [Non-member](#governed-member-type-policies-non-members)

### Roles

The governed **Member roles**  in the CANdy trust community are as follows:

* [CANdy Governing Board](#governed-role-policies-candy-governing-board)

* [Board Member](#governed-role-policies-board-member)

* [Trustee](#governed-role-policies-trustee)

* [Steward](#governed-role-policies-steward)

* [Endorser](#governed-role-policies-endorser)

The governed **non-member roles** in the CANdy trust community are as follows:

* [Registered Entity](#governed-role-policies-registered-entity)

* [Non-Registered Ledger Reader](#governed-role-policies-non-registered-ledger-reader)

### Other Relevant Stakeholders

The following are other relevant stakeholders of the trust community:
* **Technical Integrators** - Technology solution providers that integrate their solution with the CANdy ledger for purposes of credential issuance, information retrieval, or verification.

### Technical Summary

The CANdy Utility is built to conform to the following standards and protocols:

Item | Details
----- | ----------
Technical Protocol |  <br/>• HyperLedgerIndy v1.12.4 (or higher) <br/>• W3C DID Core v1.0
DID Method | `DID:INDY:CANdy:` v1.13.x (depends on release status on July 26, 2022)
Utility Supporters | Anyone using the published `DID:INDY:CANdy` universal resolver can resolve a `DID:INDY:CANdy` DIDDoc
Verifiable Credential Supporters | AnonCreds 1 *(Current State)* (JSON) <br/>W3C Verifiable Credentials JSON-LD *(future)*
Supported Revocation Protocol | INDY Revocation specification as per [documentation](https://hyperledger-indy.readthedocs.io/projects/hipe/en/latest/text/0011-cred-revocation/README.html)
Interoperability Profiles | • `DID:INDY:CANdy` DIF Universal Resolver <br/>• `DID:INDY`
Identity Primitives | • BLS-Signature <br>• X25519 <br/>• ED25519

### Out of Scope

The following topics are out of scope of this Governance Framework. 
* The policies that a Member defines for qualifying and endorsing a Registered Entity as an Issuer or Trusted Verifier.
* The policies that a Member defines for qualifying and endorsing schemas, credential definitions, and revocation registry definitions.
* The policies that a Member defines for qualifying delegating the role of Trustee or Endorser to an individual.
* The policies that an application, which is integrated with the CANdy ledger, sets within their existing authority.

## Governed Role Management and Voting Policies

### Governed Roles Overview Model
The following chart is an overview of the member hierarchy for the CANdy Network:

<p align="center">
<img src='https://github.com/bcgov/bc-vcpedia/blob/wiki-assets/images/CANdy%20Member%20Hierarchy%207.5.22.png' height='1000'>
</p>

### Acting Members

A list of active Members, Board Members, Trustees, Endorsers, and Stewards MUST be maintained in the Governance Framework. 

The following entities, boards, or individuals act in the role of Board Member, Trustee, Endorser, or Steward by active Member:

**Government of British Columbia:**
| Member Type | Acting Member | Contact Information |
| ----- | ------------- | ------------- |
| Board Member | TBD| |
| Trustee | TBD | |
| Endorser | TBD | |
| Steward | TBD | |

**Government of Ontario:**
| Member Type | Acting Member | Contact Information |
| ----- | ------------- | ------------- |
| Board Member | TBD| |
| Trustee | TBD | |
| Endorser | TBD | |
| Steward | TBD | |

**Government of Quebec:**
| Member Type | Acting Member | Contact Information |
| ----- | ------------- | ------------- |
| Board Member | TBD| |
| Trustee | TBD | |
| Endorser | TBD | |
| Steward | TBD | |

### Governed Member-type Policies: Member

**General**

A Member is an entity that participates in and is responsible for the governance and operation of the CANdy network and advocates for its use. Membership in CANdy can be held by any Canadian province, territory, federal government entity or Indigenous governing body added through a vote by the CANdy Governing Board.

Members are responsible for adhering to the following policies: 
* A Member MUST participate in the CANdy Governing Board.
* A Member MUST name one delegate from their entity to act as a Board Member. 
* A Member MUST name at least two delegates from their entity to act as Trustees.
* A Member is responsible for any costs incurred by their Board Members, Trustees, Endorsers, or Stewards and for any other costs for participating in the governance, operation, and use of the CANdy network.
* Members SHOULD maintain a separation of duties for the individuals or entities that act as Board Members, Trustees, Endorsers, and Stewards on their behalf. 

Member entities can:
* Nominate an individual from their entity to act as a Board Member.
* Nominate individuals from their entity to act as Trustees.
* Delegate individuals from their entity to act as Endorsers.
* Nominate Stewards to run and operate CANdy nodes with approval from the Board. Members are not required to operate CANdy nodes. 

**On-boarding Requirements**

Membership in CANdy can be offered to additional entities with a majority vote from the Governing Board. 

**Maintenance Requirements**

* A Member MUST have a Board Member.
* A Member MUST have at least two Trustees. 

**Off-boarding Requirements**

* A Member can elect to become a non-member. If a Member elects to do this, they MUST present a plan to decommission or transfer their nodes in accordance with the Technical Policies and MUST demote the role of their Trustees, Stewards, and Endorsers from their delegates. 

### Governed Member-type Policies: Non-members

**General**

A Non-member is any registered (i.e. has a DID:INDY:CANdy) or non-registered (i.e. does not have a DID:INDY:CANdy) entity or individual that uses the CANdy network but does not participate in its operation or governance.

The CANdy network is publicly available and can be queried and read by any individual or entity that wishes to do so. Ledger readers may be technical integrators that wish to resolve DIDs from the Ledger as well as retrieve credential schemas and credential definitions.

* A Non-member MUST comply with any applicable laws when utilizing CANdy.
* A Non-member MUST adhere to any applicable terms of use defined for the CANdy network. 

Non-member entities can:
* Read the CANdy ledger
* Request endorsement for a DID:INDY:CANdy from a Trustee that is responsible for their jurisdiction
* Integrate with the CANdy Ledger

### Governed Role Policies: CANdy Governing Board

The CANdy Governing Board, referred to as the 'Board' in this framework, is the Governing Authority for CANdy. The Board is administrated by Board Members from each Member and each Member MUST delegate one Board Member that is responsible for participating in the governance of the Board and CAndy Network. 

Collectively, the Board Members administrate the governance and operation the CANdy Provisional Governance Framework and Network.

**The responsibilities of the Board are as follows:**
* Publish and maintain the CANdy Governance Framework in accordance with its Purpose, Objectives, Guiding Principles, and Scope.
* Delegate authority and responsibility to entities and teams for the administration and operation of the CANdy network
* Provide oversight to delegated authorities to ensure to its stakeholders that the CANdy network is being operated and used in accordance with the CANdy Provisional Governing Framework.
* Ensuring the integrity of the CANdy Network and the balanced distribution of nodes. 
* Direct Trustees to promote the DID:INDY:CANdy of a delegated individual, belonging to a newly joined Member, to the role of Trustee. 

**Initialization Policies:**

For the Board to be initialized, the following requirements must be met: 
* A nominated Board Member from one of the authoring entities of this frameworks approves a version of this governance framework 
* Following the inception of the Board, the founding member(s) MUST adhere to, govern and uphold the approved and published version of the Framework. 
* The Board MUST direct Trustees to promote the Member(s) delegated individuals to the role of Trustee. 

**On-boarding Policies:**

All participating Members MUST participate in the Board when they formally become Members.  

**Maintenance Policies:**

Members MUST adhere to this Governance Framework and Member requirements to maintain membership in the Board.

**Off-boarding Policies:**

When a Member is off-boarded from the Board, the Member MUST adhere to all off-boarding policies for Board Members, Trustees, Stewards, and Endorsers in this Governance Framework. 

* A Member MUST direct trustees to demote their delegated Trustees to non-privileged DIDs.
* A Member MUST direct trustees to demote their delegated Endorsers to non-privileged DIDs. 
* A Member MUST decommission or transfer any nodes they are responsible for to another Member in accordance with the Node Operator technical policies.

### Governed Role Policies: Board Member

**General**

A Board Member is a delegate from a Member entity that participates as a voting member in the CANdy Governing Board and is responsible for the administration and operation of their entity's participation in CANdy. A Member can delegate any individual to the role of Board Member so long as they meet the Board Member on-boarding requirements. Board Members are not required to have a DID:INDY:CANdy.

A Member can only have one Board Member.

Board Members act as the administrators for their entity's governance, operation, and use of the CANdy network.

**The responsibilities of Board Members are to:**
* Participate as a voting member on the CANdy Governing Board.
* Oversee their entity's operation and use of the CANdy network.
* Propose, review, and vote revisions to the CANdy Governance Framework.

**On-boarding Policies:**

The CANdy Provisional Governing Framework sets minimum requirements for Board Members that all Members MUST adhere to. Each Member has the right to set their own additional policies and procedures for qualifying and nominating their Board Members to the Board. 

Requirements set by the CANdy Provisional Governing Framework to be on-boarded as a Board Member are:
* The individual MUST be actively employed by or contracted with their sponsoring Member.
* The individual MUST have authority to make decisions on behalf of their Member entity as part of the CANdy Board.

**Maintenance Policies:**

Each Member has the right to set their own policies and procedures for any requirements to maintain the role of Board Member.

To maintain the role of Board Member, the individual MUST:
* Remain actively employed by - or be contracted with - their sponsoring Member. 

**Off-boarding Policies:**

Each Member has the right to set its own additional policies and procedures for when and how an individual may be off-boarded as Board Member.

Prior to a Board Member's off-boarding, Members SHOULD identify a new individual to act as a Board Member as soon as possible.

### Governed Role Policies: Trustee

**General**

A Trustee is an Indy role that can be assigned to a delegate's DID:INDY:CANdy. Trustees act as administrators for their entity's operation and use of the CANdy network and can onboard Registered Entities within their jurisdiction and can onboard and manage individuals with the role of Steward or Endorser from their entity. Each Member can nominate and delegate any individual to the role of Trustee so long as they meet the Trustee on-boarding requirements. 

A Member MUST have at least two Trustees. 

Trustees MUST follow the direction of Board Members in the administration and operation of the CANdy Network. 

**The responsibilities of Trustees are to:**
* Decide on whether entities within their jurisdiction should be provisioned a public DID:INDY:CANdy.
* Direct Endorsers to write un-permissioned DID:INDY:CANdy for an Entity.
* Permission node operators to act as Stewards following the direction of the Board.
* Permission individuals to act as Endorsers.
* Administrate overall CANdy network activities and coordinate with their entity's stewards, endorsers, and other teams.
* Inform the Board about the on-boarding of new Stewards, Endorsers, Registered Entities, and changes to Trustees. 
* Establish a definition of an entity's specific transactions that an Endorser may endorse.

When Membership is expanded to a new Member, the Member MUST delegate at least two Trustees and the CANdy Governing Board MUST direct Trustees to promote the new Trustee's DID:INDY:CANdy with its signature assuming the delegates meet the Trustee onboarding requirements. This policy also applies to the initialization of the CANdy Network and its founding members.  

**On-boarding Policies:**

The CANdy Provisional Governing Framework sets minimum requirements for Trustees that all Members MUST adhere to. Each Member has the right to set their own additional policies and procedures for delegating the role of Trustee to an individual.

Requirements to be on-boarded as a Trustee are:
* The individual MUST be actively employed by or contracted with their sponsoring Member.
* Each Trustee MUST have a unique DID:INDY:CANdy to which the role of Trustee will be assigned.

The process to elevate / promote the role of a DID:INDY:CANdy from Registered Entity to Trustee is:
* At least two Trustees MUST sign a transaction that adds the Trustee permission to the DID owned by the on-boarding Trustee (non-privileged to privileged).

**Maintenance Policies:**

Each Member has the right to set their own additional policies and requirements that an individual must meet to maintain the role of Trustee.

To maintain the role of Trustee, the delegate MUST:
* Remain actively employed by or contracted with their sponsoring Member. 

**Off-boarding Policies:**

In the instance that a Trustee no longer meets the requirements to be a Trustee, the Member MUST demote the individual's DID so that they no longer have Trustee privileges assigned to their DID. Prior to a Trustee's off-boarding, Members SHOULD identify a new individual to act as Trustee as soon as possible.

Each Trustee has the right to set its own additional policies and procedures for when and how an individual may be off-boarded as Trustee.

The process to demote the role of a DID:INDY:CANdy from a Trustee to a non-role holding Registered Entity is:
* At least two Trustees must sign a transaction that removes the trustee permission from the DID belonging to the off-boarded Trustee (privileged to non-privileged).

### Governed Role Policies: Steward

**General**

Steward is an Indy role given to entities that operate CANdy network peers. Any entity can act as a Steward so long as they have been voted in to be a Steward by the Board and continually adhere to the policies for Stewards. A Steward is required to have a DID:INDY:CANdy. Members are responsible the operation, performance, and security of any Nodes they operate.

**Stewards author and endorse the following transaction types on the CANdy ledger:**
* Node configuration writes that affect the node they own/operate.
* DID:INDY:CANdy writes for Network Monitors.

**On-boarding Policies:**

The addition and removal of Stewards from the CANdy network can affect the performance, resilience, and data integrity for all Members. 

If a Member wants to onboard an additional Steward or Node to the network, the Member MUST bring it to a vote. The addition of Stewards or Nodes to the network must be approved by the Board in adherence to the policies defined in the [Voting Methodology](#voting-methodology) section. 

**Maintenance Policies:**

* The Member that is responsible for the Steward is responsible for the cost of installing, operating, and maintaining any nodes, infrastructure, or technical teams.
* Stewards MUST adhere to the policies and requirements outlined in the Node Operator Technical Policies.

**Off-boarding Policies:**

If a Member elects to off-board a Steward or Node from the network that it is responsible for, the Member MUST bring it to a vote to the Board. The addition of Stewards or Nodes to the network must be approved by the Board in adherence to the policies defined in the [Voting Methodology](#voting-methodology) section. 

When off-boarding a Node from the network, the Board MUST confirm that the Steward or Node(s) are not the sole record(s) of the network's Genesis files. 

### Governed Role Policies: Endorser

**General Requirements**

An Endorser is a role that can be assigned to a DID:INDY:CANdy and Endorsers are responsible for endorsing transactions authored by Registered Entities. Endorsers MUST have a DID:INDY:CANdy.

Endorsement is the centralized decision-making process by a Member that allows them to determine what can be written to the ledger by Registered Entities within their Jurisdiction.  When a transaction has been endorsed by an Endorser, only then can the transaction author (i.e. Registered Entity) write the transaction to the ledger. 

Members MAY have a shared Endorser DID:INDY:CANdy that many individuals utilize or the Member MAY provide several unique DID:INDY:CANdys to their delegated Endorsers. 

A Member MUST have at least one Endorser and Members have the right to set their own additional policies and requirements that MUST be met for their Endorser to endorse a transaction. Transactions MUST be endorsed by at least one Endorser before the transaction can written to the ledger.

An Endorser MUST adhere to the definition of which transactions they may endorse, as defined by their Trustees.

Endorsers can endorse the following transaction types on the CANdy ledger:
* DID:INDY:CANdy writes for unprivileged Registered Entities
* Schemas
* Credential Definitions
* Revocation Registry definitions
* Revocation Registry entries

**On-boarding Policies:**

A Member can set additional policies and requirements to promote an individual as an Endorser within their own entity. The individuals that act as an Endorser for a Member MUST be actively employed or contracted with their sponsoring Member. 

The process to elevate / promote the role of a DID:INDY:CANdy from Registered Entity to Endorser is:
* At least two Trustees MUST sign a transaction that adds the Endorser permission to the DID owned by the on-boarding Endorser (non-privileged to privileged).

* Endorsers MUST have their name included as an alias in their DID document. 

**Maintenance Policies:**

* Endorsers MUST adhere to the policies and requirements outlined in the Endorser Policies and any additional policies defined by their sponsoring Member.

**Off-boarding Policies:**

A Member can set their additional policies to demote an individual from the role of Endorser. 

The process to demote the role of a DID:INDY:CANdy from an Endorser to a non-role-holding Registered Entity is:
* At least two Trustees must sign a transaction that removes the Endorser permission from the DID belonging to the off-boarded Endorser (privileged to non-privileged).

### Governed Role Policies: Registered Entity

**General**

A Registered Entity is any Canadian Entity that has been provisioned a public DID:INDY:CANdy. The CANdy network has been primarily designed for use by enterprises, governments, non-profits, and other public-sector entities. A DID:INDY:CANdy(s) can also be provided to a Member's Trustee(s), Endorser(s), Steward(s), and the Board.

Registered Entities that do not have an elevated role of Trustee or Endorser are referred to as non-privileged DIDs. 

Approvals MUST be received from at least two Trustees within their jurisdiction prior to an entity being provided with a DID:INDY:CANdy.

Any transaction that a Registered Entity authors MUST be endorsed by an Endorser before it can be written to the ledger. Currently, Registered Entities can write updates to their DID Document without endorsement from the Endorser. 

The issuance of credentials which reference a credential definition associated with their DID:INDY:CANdy does not require any endorsement.

Registered Entities can author the following transactions to the CANdy Ledger:
* Credential schemas
* Credential definitions
* Revocation Registry definitions
* Revocation Registry entries

Each transaction requires at least one signature by an Endorser before a transaction they authored can be written to the ledger. 

**On-boarding Requirements**

Each Member can set additional policies, procedures, and requirements for provisioning an entity with a DID:INDY:CANdy so long as they meet these minimum requirements:

* DID:INDY:CANdy DIDs can only be provided to Canadian government entities, Indigenous governing bodies, and any other legislated ("broader public sector") entity in Canada.
* DID:INDY:CANdy DIDs can only be provided to individuals that have been delegated the role of Trustee, Steward, or Endorser by their Member.  
* Trustees coordinate the provisioning of a DID:INDY:CANdy to an entity. At least two Trustees belonging to a Member MUST approve the distribution of a DID:INDY:CANdy to an entity before the DID can be provisioned.

**Maintenance Requirements**

* Once an entity has been provisioned with a DID:INDY:CANdy it is not possible to remove the DID from the ledger. Members can determine what credential definitions an entity can be associated with but once the association has been made it cannot (currently) be reversed. 

**Off-boarding Requirements**

* Once an entity has been provisioned with a DID:INDY:CANdy it is not possible to remove the DID from the ledger. Members can determine what credential definitions an entity can be associated with, but once the association has been made, it cannot (at this time) be reversed. 

### Governed Role Policies: Non-registered Ledger Reader

The CANdy Ledger is publicly available and can be queried and read by any individual or entity that wishes to do so. Ledger readers may be technical integrators that wish to resolve DIDs from the Ledger as well as retrieve credential schemas and credential definitions. Ledger readers are not required to have a DID:INDY:CANdy.

Because the CANdy Ledger is publicly available there are no on-boarding, maintenance, or off-boarding requirements that this role-type needs to adhere to.

## Voting Methodology:

The following decisions MUST be decided through voting by the Board Members that participate in CANdy Governing Board. Each Board Member is entitled to a single vote and a Member has no more than one vote in total.

| **Topic** | **Threshold** |
| -------- | -------- |
| Expand Membership | 66% of Board Member votes in favor |
| Publish new versions of the Provisional Governance Framework | 66% of Board Member votes in favor |
| On-board or off-board an additional Steward (node operator) | 66% of Board Member votes in favor|
| On-board or off-board an node / peer from the CANdy network | 66% of Board Member votes in favor|

The following decisions MUST be agreed upon by Trustees within a Member entity. Members have the right to set their own policies and requirements for the following decisions. 

| **Topic** | **Threshold** |
| -------- | -------- |
| Provisioning a DID:INDY:CANdy to a to-be Registered Entity | 2 Trustee approvals within a Member.|
| Delegate role of Trustee | Delegated by the Member's Board Member.|
| Delegate role of Endorser | 2 Trustee approvals within a member.|

## Technical Policies

### CANdy Technical Policies

Due to the provisional nature of this document, CANdy technical policies will follow the Hyperledger Indy best practices except where explicitly specified otherwise, and will also be expanded on by the Technical Team implementing this framework.

More information can be found here: https://wiki.hyperledger.org/display/indy

### General Node Requirements

The CANdy Board recognizes that, currently, the performance of Indy Nodes begins to degrade after 25 nodes have been established.

* The network requires a minimum of 4 nodes to be operational
* Maximum number of nodes is 25 nodes (as per above)
* The addition of nodes SHOULD be controlled at a network level as to satisfy minimum/maximum node instances
* Maintain accurate publicly available contact information

Due to the provisional nature of this document, Node Operator Technical Policies will follow the Hyperledger Indy and Sovrin Network best practices except where explicitly specified otherwise, and will also be expanded on by the Technical Team implementing this framework.

A Steward Node:
1. MUST be available to run as a Validator Node or Observer Node on any of the formal
ledgers that make up the CANdy Network.
2. MUST run a release of the CANdy Open Source Code as approved and designated by
the CANdy Board.
3. MUST facilitate an upgrade to a new version of the CANdy Open Source Code within
three (3) business days of a new release that has been: a) recommended by the CANdy
Operations Team, and b) accepted by a vote from the Board. 
4. MUST register all Node configuration data required by the Pool Ledger in a timely
manner, keeping information up to date within three (3) business days of changes.
5. MUST have at least two (2) IT-qualified persons assigned to administer the node, and at
least one other person who has adequate access and training to administer the Node in
an emergency (e.g., the network being unable to reach consensus or being under
attack). 
6. MUST supply contact info for all administrators to the CANdy Board, whose
accuracy is tested at least quarterly (e.g., by sending an email and/or text that doesn’t
bounce).
7. MUST maintain a system backup,snapshot, or image, such that recovering the system
from failure could be expected to take one hour or less.

### Node Technical Policies

The following requirements apply to Steward Nodes on the CANdy Main Network. Nodes on any
other CANdy Test Network should be similar to these, but requirements may be downgraded from MUST
to SHOULD.
1. MUST run on robust server-class hardware.
2. If a Node is run on a VM, the Steward:
a. MUST run on a mainstream hypervisor that receives timely patches from its
vendor or community.
b. SHOULD apply hypervisor patches on a regular basis.
3. The Node MUST run in an OS that is dedicated to the validator (i.e., a single-purpose
physical or virtual machine that MUST run CANdy Open Source Code); MAY run other
software approved by the Board or a delegated technical group; And MUST NOT run any other software. Software
required to support the node, such as monitoring, backup and configuration
management software, are approved as a general category. However, Stewards should
discuss with the Board or a delegated technical group any software packages that transmit between the Steward Node
and the outside.
4. MUST run a server with compatible versions of the operating systems supported by the
Hyperledger Indy Node requirements as documented in the release notes.
5. MUST have minimum compute power (as of mid-2022, 8 or more cores is considered
adequate).
6. MUST have adequate RAM (as of mid-2022, 32 GB of RAM is considered adequate).
7. MUST have at least 1 TB, with the ability to grow to 2 TB, of reliable (e.g., RAIDed) disk
space, with an adequately sized boot partition.
8. MUST have a high-speed connection to the internet with highly available, redundant
pipes (as of mid-2022, 100 Mbps was considered adequate).
9. MUST have at least two dedicated NICs for CANdy Validator Node consensus traffic, and
a different NIC to process external requests. Each NIC must have a stable, static,
world-routable IP address.
10. MUST have a system clock that is demonstrably in sync with well-known NTP servers.
11. SHOULD have a power supply consistent with high availability systems.

### Node Security Policies

A Steward:
1. MUST maintain Steward keys on a separate machine from the machine that runs their
node. This machine, called the “CLI (Command Line Interface) system”, uses Steward
keys to authorize the Node to participate in the pool, and is thus the basis for trust for the
node and the Steward’s identity on the network. The CLI system is not required to have
high-end hardware, but in terms of IT best practices for security, it must meet or exceed
the standards for the Node (see following items).
2. MUST provide certification that their Node runs in a locked datacenter with appropriate
levels of security, including the specifications that they target (e.g., SSAE 16 type II
compliance; other standards may also be acceptable).
3. MUST assert that their Node is isolated from internal systems of a Steward (because the
Validator Node is publicly visible and thus an inappropriate candidate for access to
privileged internal networks).
4. MUST assert that their Node, and its underlying systems, uses state-of-the-art
authentication for remote access (at least SSH with key plus password plus source IP
firewall rule, and two-factor authentication wherever possible).
5. MUST NOT allow access (remote or local) to the Node or CLI systems by anyone other
than assigned admins.
6. MUST apply the latest security patches within one (1) week or less (24 hours or less is
recommended).
7. MUST attest that the Node runs on a server protected by a firewall that, at minimum:
Disallows public ingress except on ports used by the Node software (different
machines may choose to expose ledger features on different ports, so no
standard port setup is required); Optionally enables SSH, Remote Desktop, and similar remote access tools but
constrains ingress for these tools in some way that excludes the public but allows
access for admins; Locks down egress ports to limit the ability to jump from Node to some other
location.
8. MUST run the Steward security check tool as requested, and MUST receive Board or a delegated technical group's approval of the results before the Node is authorized to participate in consensus.
9. MUST run the Steward security check tool from time to time as requested by the CANdy Board and provide the test results report to the CANdy Board within three (3) business days.

### Node Operating Requirements

A Steward:
1. MUST equip at least two (2) technical points of contact responsible for administering the
Steward Node with an SMS-capable device for alerting.
2. SHOULD aim to achieve at least 99.9% (three nines) uptime for their Node (this amounts
to about 1.4 minutes of downtime per day or 9 hours per year).
3. SHOULD coordinate downtime with other Stewards in advance via a mechanism as
determined from time to time by agreement between the CANdy Board and any other relevant CANdy Governing Body.

### Technical and Organizational Measures

The CANdy Network MUST maintain Technical and Organizational Measures that Members which operate CANdy nodes MUST implement in order to promote secure processing, avoid data breaches, and facilitate compliance with relevant data protection obligations.  

The following Technical and Organizational Measures MUST be adhered to by Members which operate CANdy nodes:

* Contact information for technical resources 
* Process for ensuring technical contacts remain up to date. 
* Offboarding  technical resources. 
* Onboarding new technical resources. 
* Monitoring services. 
* Incident and outage notifications and alerts 
* Incident Escalation -- including outside the team (Trustees, Board, Members) 
* Assigned responsibilities in times of crisis. 
* Communications strategy for incidents and outages
* Incident meeting protocols 
* Blameless post-incident reviews 
* Runbook of actions to resolve potential incidents  


### Endorser Technical Policies

Each member (e.g., Province) MUST own and operate their own Endorser service. Members have sovereignty over their use of their Endorser service. 

An Endorser has the responsibility of technically enforcing the definition of whose transactions it may endorse as per the Endorser's list of responsibilities.

Endorsers MUST include the alias of a DID owner in the DID document. Endorsers MUST NOT record personally identifiable or sensitive information in a Registered Entity's DID document. 

A Member MUST maintain an audit trail of transactions endorsed by their delegated individuals acting as Endorsers and MUST provide audit reports to the Board, upon their request, for all transactions endorsed by their individual Endorsers.

Due to the provisional nature of this document, Endorser technical policies will be created by the Technical Team implementing this framework, and further expanded by the member to which it belongs as required.

## Localization

This section covers the policies governing languages and translations for the GF, denoted by the [IETF BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) language tag to identify languages.

### Official languages

The Governance Framework has been developed and executed in English and French and both versions have equal legal standing. All amendments to this framework will be made in both English and French.

### Production of Translations

The Board MUST develop policies for producing and approving translations of this Framework. Drafts and approved versions SHOULD be produced in English and French.

## Governing & Administrating Authority

The CANdy Provisional Governing Authority consists of a Board of Trustees, from participating Canadian Jurisdictions, that is responsible for the development and maintenance of the CANdy Provisional Governing Framework. Currently, the Governing Authority also acts as the Administering Authority for the CANdy Provisional Governing Framework. (has a DID and DID is embedded with GF)

The contact for petitioners and relying parties of this GF is
* Name _TBD__________
* Title _TBD___________
* Organization _TBD__________
* Email _TBD__________

## Terminology and Notation

Many commonly used terms can be defined in the Trust Over IP documentation:

[Glossary - General Trust over IP Terms](https://trustoverip.github.io/toip/glossary)

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119).
