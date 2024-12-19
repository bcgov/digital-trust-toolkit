# Liquor and Cannabis Regulation Branch - Licence – Credential Documentation

## 1. About this Document

This document describes the Liquor and Cannabis Regulation Branch's (LCRB) use of the Licence credential to help potential verifiers determine whether it is suitable for their needs. The intended audience includes policy analysts, privacy specialists, solution architects, developers, and data architects.

### 1.1 Version History

| Ver. | Date | Notes |
|------|------|-------|
| 1.0  | December 12, 2024     | Intial version       |

## 2. Credential Overview
This credential is issued to OrgBook BC registry that represents a Licence issued to an organization.
|              |                                                                |
|-------------------------|---------------------------------------------------------------------------------|
| **Credential:**         | CRS: Cannabis Retail Store License                                          |
| **Schema:**             | Licence                                          |
| **Issuer:**             | Liquor and Cannabis Regulation Branch (LCRB) <br/> [https://justice.gov.bc.ca/lcrb/](https://justice.gov.bc.ca/lcrb/) |     

## 3. Governance & Legal

### 3.1 Governing Authority & Administrative Authority
The Liquor and Cannabis Regulation Branch (LCRB) is the governing authority and administrative authority for the Licence credential.

### 3.2 Legal

#### 3.2.1 For Verifiers
The general manager oversees the LCRB. Under B.C. law, they have specific responsibilities and authorities.
All the LCRB's activities are undertaken under the authority of the general manager. The general manager administers the
- [Liquor Control and Licensing Act (LCLA)](https://www.bclaws.ca/civix/document/id/complete/statreg/15019)
- [Cannabis Control and Licensing Act (CCLA)](https://www.bclaws.ca/civix/document/id/complete/statreg/18029)

They also supervise all establishments licensed under the LCLA and the CCLA, including
- Manufacturers of liquor and agents
- Places where special event permits are issued
- Private cannabis stores and cannabis marketers

#### 3.2.2 For End Users
_A statement – included or linked to – limiting the liability of the issuer (and, if different, the governing and administrative authorities) for any harms suffered by parties that are issued the credential. This will often be presented to end users during the issuance process._

## 4. Credential Data, Issuance, and Changes

### 4.1 Data Source(s)
LCRB maintains a database of registered legal professionals

### 4.2 Data Updates
LCRB administrators perform updates on database records which trigger credential revocations and reissuance, see further details in section 4.4

### 4.3 Issuance
Issuance is directly to OrgBook BC upon triggered events from the LCRB licensing application. The licence is associated to the matching organization in OrgBook based on the business number information.

### 4.4 Revocation
- The credential will be revoked in the following cases:
  - If the status changes from Active to any other status
- The credential will be revoked and re-issued in the following cases:
  - If the licence information changes

## 5. Credential Definition

### 5.1 Subject
The subject of this credential is the Organization to whom the licence was issued to

### 5.2 Attributes

| **Display Name**         | **Attribute**            | **Description**                                                                                                       | **Format**               | **Rules & Notes**        | **Examples**             |
|--------------------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------|--------------------------|--------------------------|--------------------------|
| **TODO**           | `TODO`             | TODO                                          | text                     | N/A     

## 6 Implementations
### 6.1 Technical Format
This credential uses the [Hyperledger AnonCreds](https://github.com/hyperledger/anoncreds/) specification and the "Licence" schema.

### 6.2 Issuer List
The Governing Authority of this Credential document attests that the following issuer information is accurate and can be relied upon by verifiers.
| Environment | Issuer Name | Issuer DID |
|------|------|-------|
| CANdy Production  | TODO     | TODO   |
| CANdy Test  | TODO     | TODO   |

### 5.3 Schema Implementation
|Environment|Ledger|Schema ID|
|---|---|---|
| CANdy Production  | TODO     | TODO   |
| CANdy Test  | TODO     | TODO   |

### 5.4 Credential Implementation
|Environment|Ledger|Credential Definition ID|OCA Bundle|
|---|---|---|---|
|CANdy Production|TODO|TODO|TODO|
|CANdy Test|TODO|TODO|TODO|

