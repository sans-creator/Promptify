#include <iostream>
#include <queue>
#include <unordered_map>
#include <vector>
#include <algorithm>

// Node structure for Huffman Tree
struct Node {
    char symbol;
    int frequency;
    int order; // To maintain stable ordering
    Node* left;
    Node* right;
    
    Node(char sym, int freq, int insertionOrder = 0) 
        : symbol(sym), frequency(freq), order(insertionOrder), left(nullptr), right(nullptr) {}
};

// Comparator for priority queue (min-heap based on frequency)
struct Compare {
    bool operator()(Node* a, Node* b) {
        // First compare by frequency
        if (a->frequency != b->frequency) {
            return a->frequency > b->frequency;
        }
        
        // For equal frequencies, prioritize internal nodes over leaf nodes
        bool aIsLeaf = (a->left == nullptr && a->right == nullptr);
        bool bIsLeaf = (b->left == nullptr && b->right == nullptr);
        
        if (aIsLeaf && !bIsLeaf) {
            return true; // Leaf nodes have higher priority value (come later)
        }
        if (!aIsLeaf && bIsLeaf) {
            return false; // Internal nodes have lower priority value (come first)
        }
        
        // If both are same type, use order
        return a->order > b->order;
    }
};

// Generate Huffman codes by traversing the tree
void generateCodes(Node* root, std::string code, std::unordered_map<char, std::string>& huffmanCodes) {
    if (!root) return;
    
    // If it's a leaf node, store the code
    if (!root->left && !root->right) {
        huffmanCodes[root->symbol] = code.empty() ? "0" : code;
        return;
    }
    
    // Traverse left with '0' and right with '1'
    generateCodes(root->left, code + "0", huffmanCodes);
    generateCodes(root->right, code + "1", huffmanCodes);
}

// Recursively delete all nodes in the tree
void deleteTree(Node* root) {
    if (!root) return;
    deleteTree(root->left);
    deleteTree(root->right);
    delete root;
}

// Build Huffman Tree and generate codes
std::unordered_map<char, std::string> generateHuffmanCodes(std::vector<std::pair<char, int>>& characters) {
    std::priority_queue<Node*, std::vector<Node*>, Compare> minHeap;
    
    int orderCounter = 0;
    // Create leaf nodes and add to priority queue
    for (auto& p : characters) {
        minHeap.push(new Node(p.first, p.second, orderCounter++));
    }
    
    // Special case: if there's only one character
    if (minHeap.size() == 1) {
        std::unordered_map<char, std::string> codes;
        Node* singleNode = minHeap.top();
        codes[singleNode->symbol] = "0";
        delete singleNode;
        return codes;
    }
    
    // Build the Huffman tree
    while (minHeap.size() > 1) {
        Node* first = minHeap.top();
        minHeap.pop();
        
        Node* second = minHeap.top();
        minHeap.pop();
        
        Node* left = first;
        Node* right = second;
        
        // When frequencies are equal, ensure leaf nodes go to the left
        if (first->frequency == second->frequency) {
            bool firstIsLeaf = (first->left == nullptr && first->right == nullptr);
            bool secondIsLeaf = (second->left == nullptr && second->right == nullptr);
            if (!firstIsLeaf && secondIsLeaf) {
                // First is internal, second is leaf - swap them
                left = second;
                right = first;
            }
        }
        
        // Create internal node with combined frequency
        Node* internal = new Node('\0', left->frequency + right->frequency, orderCounter++);
        internal->left = left;
        internal->right = right;
        
        minHeap.push(internal);
    }
    
    // Generate codes from the tree
    std::unordered_map<char, std::string> huffmanCodes;
    Node* root = minHeap.top();
    generateCodes(root, "", huffmanCodes);
    
    // Clean up memory
    deleteTree(root);
    
    return huffmanCodes;
}

int main() {
    int n;
    std::cin >> n;
    
    std::vector<std::pair<char, int>> characters;
    
    // Read characters and their frequencies
    for (int i = 0; i < n; i++) {
        char symbol;
        int frequency;
        std::cin >> symbol >> frequency;
        characters.push_back({symbol, frequency});
    }
    
    // Build Huffman tree and get codes
    std::unordered_map<char, std::string> huffmanCodes = generateHuffmanCodes(characters);
    
    // Output in the same order as input
    for (auto& p : characters) {
        std::cout << p.first << ": " << huffmanCodes[p.first] << std::endl;
    }
    
    return 0;
}
