Here is a `README.md` file for your project, which describes the structure, setup, and execution of your Shamir's Secret Sharing Algorithm:

```markdown
# Shamir's Secret Sharing Algorithm

This project implements Shamir's Secret Sharing Algorithm using Node.js. It reads test cases from JSON files, decodes values, and reconstructs a secret using Lagrange interpolation.

## Project Structure

```
.
├── src
│   ├── index.js          # Main script to process test cases and display results
│   ├── utils.js          # Utility functions for decoding values and performing Lagrange interpolation
│   └── data
│       ├── testcase1.json  # Input data for test case 1
│       └── testcase2.json  # Input data for test case 2
├── package.json          # Node.js package configuration
└── README.md             # This readme file
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/shamir-secret-sharing.git
   cd shamir-secret-sharing
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

## Usage

1. **Add your test cases**: Place your test cases in the `data` folder. Test cases should be in JSON format, similar to the provided `testcase1.json` and `testcase2.json`.

2. **Run the project**:
   ```bash
   npm start
   ```
   This will execute the `index.js` file and process each test case, outputting the secret for each one.

## Example Test Case Structure

Each test case JSON file should follow this format:

```json
{
  "keys": {
    "n": 4,  // Total number of shares
    "k": 3   // Minimum shares required to reconstruct the secret
  },
  "1": {
    "base": "10",
    "value": "4"
  },
  "2": {
    "base": "2",
    "value": "111"
  },
  "3": {
    "base": "10",
    "value": "12"
  },
  "6": {
    "base": "4",
    "value": "213"
  }
}
```

- `keys`: Contains `n` (number of shares) and `k` (threshold for reconstructing the secret).
- The numbered keys (`1`, `2`, `3`, `6`, etc.) represent points with `base` and `value`:
  - `base`: The numerical base (e.g., `10` for decimal, `2` for binary).
  - `value`: The value at the respective point, expressed in the given base.

## Explanation

- **`index.js`**:
  - Reads test cases from the `data` directory.
  - Processes each test case by converting the points using `decodeValue` and applying `lagrangeInterpolation` to reconstruct the secret.
  - Outputs the secret for each test case.

- **`utils.js`**:
  - `decodeValue(base, value)`: Converts a value from the given base to a decimal number.
  - `lagrangeInterpolation(points)`: Uses Lagrange interpolation to compute the secret from the provided points.

## Output

After running the command `npm start`, the output will display the reconstructed secrets for each test case:

```
Secret for Testcase 1: 3
Secret for Testcase 2: 79836264046592
```

## Author

- **Mohit Sharma**

## License

This project is licensed under the ISC License.
```

This `README.md` provides an overview of the project, its structure, setup, and how to use it. Replace `https://github.com/yourusername/shamir-secret-sharing.git` with the actual URL of your repository if needed.
