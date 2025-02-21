# [Issuer and Name(s) of the Credential(s)] – Credential Documentation

## 1 About this Document
This document describes the [Issuer and Name(s) of the Credential(s)] to help potential verifiers determine whether it is suitable for their needs. The intended audience includes policy analysts, privacy specialists, solution architects, developers, and data architects.

### 1.1 Version History
| Ver. | Date        | Notes       |
|------|-------------|-------------|
| 1.0  | [Insert date] | [Insert notes] |

## 2 Credential Overview
[Insert paragraph summarizing what the credential(s) is, what it’s for, who it’s for (i.e., who is likely to have and use one), and other notable info.]

- **Credential**: [Name(s) of the Credential(s)]
- **Schema**: [Name of the schema; technical details in section 6]
  - [If the schema is documented separately, include a link here]
- **Issuer**:
  - **Name**: [Name of issuer]
  - **Description**: [Brief description of issuer]
  - **Website**: [Issuer website]
  - **Contact info**: [Issuer contact information]

## 3 Governance & Legal
### 3.1 Governing Authority & Administrative Authority
The governing body with authority to issue and revoke the credential(s) is [Entity Name], including contact information unless an administrative authority is the designated contact.

- **Reference**: [Trust over IP Glossary - Governing Body](https://glossary.trustoverip.org/#term:governing-body)

If different from the Governing Authority, the administrative body delegated operational responsibilities by the governing authority is [Entity Name], including contact information.

- **Reference**: [Trust over IP Glossary - Administering Body](https://glossary.trustoverip.org/#term:administering-body)

### 3.2 Legal
#### 3.2.1 For Verifiers
[Insert or link to a statement limiting the liability of the issuer (and, if different, the governing and administrative authorities) for any harms suffered by parties that accept the credential.]

#### 3.2.2 For End Users
[Insert or link to a statement limiting the liability of the issuer (and, if different, the governing and administrative authorities) for any harms suffered by parties issued the credential. This may be presented to end users during issuance.]

## 4 Credential Data, Issuance and Changes
[Optional: Include additional issuer information here if too detailed for the summary table.]

### 4.1 Data Source(s)
[Describe where the data in the credential comes from and how the issuer ensures its accuracy when collected.]

#### 4.1.1 Data Updates
[Describe how and when the issuer receives updates to the credential data. Leave credential updates to the Revocation section.]

### 4.2 Issuance
[Describe the issuance process sufficiently for a prospective verifier to understand how the issuer ensures the credential is issued only to the correct party. Include how the holder is identified and authenticated, potentially referencing Data Source(s). Specify if the credential is issued to individuals or organizations and what type(s) of wallets (e.g., specific brands or any standards-compliant wallet) it supports.]

### 4.3 Revocation
[Describe circumstances—specific or general—that would cause the issuer to revoke a credential after issuance. Optionally, include cases where it would be revoked and re-issued.]

## 5 Credential Definition
### 5.1 Subject
[Specify the type of entity—e.g., a person, company, title—described by the attributes. Explain why a verifier can be confident the holder is the subject, referencing the issuance process if applicable.]

### 5.2 Attributes
[List all attributes in the credential in a table. Describe each attribute beyond its schema name (e.g., how it’s populated, whether it can be blank). Use subheadings (e.g., “5.2.1 [Subset Name]”) for subsets of attributes if needed.]

| Display Name          | Description                  | Attribute         | Data Type         | Format    | Rules         | Examples         | Notes            |
|-----------------------|------------------------------|-------------------|-------------------|-----------|---------------|------------------|------------------|
| [Attribute Name]      | [Description of data]        | [Schema attribute name] | [e.g., String, Integer] | [e.g., YYYYMMDD] | [e.g., Never blank] | [e.g., Sample data] | [Additional info or quirks] |

## 6 Implementations
### 6.1 Technical Format
[Specify technical format(s), e.g., AnonCreds, W3C, of the credential.]

### 6.2 Issuer List
| Environment       | Issuer DID                        |
|-------------------|-----------------------------------|
| [Name]            | [DID of the issuer]               |

### 6.3 Schema
| Environment       | Ledger                            | Schema ID                         |
|-------------------|-----------------------------------|-----------------------------------|
| [Name]            | [Link to ledger]                  | [Schema transaction ID]           |

### 6.4 Credential
[If multiple credential definitions exist, distinguish them by rows with unique names.]

| Environment       | Ledger                            | Credential Definition ID          | OCA Bundle            |
|-------------------|-----------------------------------|-----------------------------------|-----------------------|
| [Name]            | [Link to ledger]                  | [Credential transaction ID]       | [OCA Bundle ID]       |

### 6.5 OCA Bundle Additional Information
[Document the additional configuration details required to build the Overlay Capture Architecture (OCA) bundle for this credential, such as visual assets, colors, and attribute mappings. Provide the following details as applicable. You can use the [OCA Explorer](https://bcgov.github.io/aries-oca-explorer/) to help build an example OCA bundle based on this information.]

- **Logo Image**: [URL to the logo image for the credential display]
- **Background Image Slice**: [URL to the background image slice (e.g., for wallet display)]
- **Full Background Image**: [URL to the full background image]
- **Primary Color**: [Hex code for the primary background color, e.g., "#003366"]
- **Secondary Color**: [Hex code for the secondary background color, e.g., "#fcbc1e"]
- **Main Display Attribute**: [Name of the primary attribute to display prominently, e.g., "given_names"]
- **Secondary Display Attribute**: [Name of the secondary attribute to display, e.g., "family_name"]
- **Issuance Date Field**: [Name of the attribute indicating issuance date, or leave blank if not applicable]
- **Expiry Date Field**: [Name of the attribute indicating expiry date, or leave blank if not applicable]

## 7 Example Proof Requests
[Optional: Include one or more proof requests to illustrate credential use by a verifier, with a plain text explanation of each.]

---
