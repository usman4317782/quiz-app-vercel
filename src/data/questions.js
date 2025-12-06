// Sample question bank structure
// User should replace this with their 50 questions

const questionBank = [
    {
        id: 1,
        question: "What will be the output of: lst = [1, 2, 3]; print(lst.append(4) or lst)?",
        options: ["None", "[1, 2, 3, 4]", "[1, 2, 3, 4, None]", "Error"],
        correctAnswer: "[1, 2, 3, 4]"
    },
    {
        id: 2,
        question: "What is the result of: {**{'a': 1}, **{'a': 2, 'b': 3}}?",
        options: ["{'a': 1, 'b': 3}", "{'a': 2, 'b': 3}", "{'a': [1, 2], 'b': 3}", "Error"],
        correctAnswer: "{'a': 2, 'b': 3}"
    },
    {
        id: 3,
        question: "What does list(map(lambda x: x**2, filter(lambda x: x % 2, [1,2,3,4,5]))) produce?",
        options: ["[1, 9, 25]", "[4, 16]", "[1, 4, 9, 16, 25]", "[2, 4]"],
        correctAnswer: "[1, 9, 25]"
    },
    {
        id: 4,
        question: "Given x = [1, 2, 3]; y = x[:]; y[0] = 99. What is x[0]?",
        options: ["99", "1", "None", "Error"],
        correctAnswer: "1"
    },
    {
        id: 5,
        question: "What is the output of: print(all([True, 1, 'hello', [1]]))?",
        options: ["True", "False", "1", "Error"],
        correctAnswer: "True"
    },
    {
        id: 6,
        question: "What does {x: x**2 for x in range(5) if x % 2 == 0} produce?",
        options: ["{0: 0, 2: 4, 4: 16}", "{1: 1, 3: 9}", "{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}", "Error"],
        correctAnswer: "{0: 0, 2: 4, 4: 16}"
    },
    {
        id: 7,
        question: "What is the result of: [(x, y) for x in [1, 2] for y in [3, 4]]?",
        options: ["[(1, 3), (1, 4), (2, 3), (2, 4)]", "[(1, 2), (3, 4)]", "[(1, 3), (2, 4)]", "Error"],
        correctAnswer: "[(1, 3), (1, 4), (2, 3), (2, 4)]"
    },
    {
        id: 8,
        question: "What will be printed: d = {}; d.setdefault('key', []).append(1); print(d)?",
        options: ["{'key': []}", "{'key': [1]}", "{}", "Error"],
        correctAnswer: "{'key': [1]}"
    },
    {
        id: 9,
        question: "What does sorted([3, 1, 4], key=lambda x: -x) return?",
        options: ["[1, 3, 4]", "[4, 3, 1]", "[-4, -3, -1]", "Error"],
        correctAnswer: "[4, 3, 1]"
    },
    {
        id: 10,
        question: "What is the output of: print(any([False, 0, '', [], None]))?",
        options: ["True", "False", "None", "Error"],
        correctAnswer: "False"
    },
    {
        id: 11,
        question: "What does list(zip(*[(1, 2), (3, 4), (5, 6)])) produce?",
        options: ["[(1, 2), (3, 4), (5, 6)]", "[(1, 3, 5), (2, 4, 6)]", "[(1, 2, 3, 4, 5, 6)]", "Error"],
        correctAnswer: "[(1, 3, 5), (2, 4, 6)]"
    },
    {
        id: 12,
        question: "What is the result of: s = {1, 2, 3}; s.add(2); len(s)?",
        options: ["4", "3", "5", "Error"],
        correctAnswer: "3"
    },
    {
        id: 13,
        question: "What does ''.join(map(str, [1, 2, 3])) produce?",
        options: ["'[1, 2, 3]'", "'123'", "'1 2 3'", "Error"],
        correctAnswer: "'123'"
    },
    {
        id: 14,
        question: "What will be the value of x: x = [1]; x = x + [2]; y = x; x += [3]?",
        options: ["x = [1, 2, 3], y = [1, 2]", "x = [1, 2, 3], y = [1, 2, 3]", "x = [1, 2], y = [1, 2, 3]", "Error"],
        correctAnswer: "x = [1, 2, 3], y = [1, 2]"
    },
    {
        id: 15,
        question: "What does dict.fromkeys(['a', 'b', 'c'], 0) create?",
        options: ["{'a': 0, 'b': 0, 'c': 0}", "['a', 'b', 'c']", "{0: 'a', 0: 'b', 0: 'c'}", "Error"],
        correctAnswer: "{'a': 0, 'b': 0, 'c': 0}"
    },
    {
        id: 16,
        question: "What is the output of: print([1, 2, 3].index(2))?",
        options: ["2", "1", "[2]", "Error"],
        correctAnswer: "1"
    },
    {
        id: 17,
        question: "What does set('aabbcc') produce?",
        options: ["{'a', 'b', 'c'}", "{'aa', 'bb', 'cc'}", "{'aabbcc'}", "['a', 'b', 'c']"],
        correctAnswer: "{'a', 'b', 'c'}"
    },
    {
        id: 18,
        question: "What is the result of: [*range(3), *range(3, 6)]?",
        options: ["[0, 1, 2, 3, 4, 5]", "[range(3), range(3, 6)]", "Error", "[0, 1, 2, 0, 1, 2]"],
        correctAnswer: "[0, 1, 2, 3, 4, 5]"
    },
    {
        id: 19,
        question: "What does ''.join(reversed('hello')) produce?",
        options: ["'hello'", "'olleh'", "['o', 'l', 'l', 'e', 'h']", "Error"],
        correctAnswer: "'olleh'"
    },
    {
        id: 20,
        question: "What will dict(zip(['a', 'b'], [1, 2])) create?",
        options: ["{'a': 1, 'b': 2}", "[('a', 1), ('b', 2)]", "{'a': [1, 2], 'b': [1, 2]}", "Error"],
        correctAnswer: "{'a': 1, 'b': 2}"
    },
    {
        id: 21,
        question: "What is the output of: print((lambda x, y=2: x * y)(3))?",
        options: ["6", "5", "Error", "None"],
        correctAnswer: "6"
    },
    {
        id: 22,
        question: "What does list(itertools.chain([1, 2], [3, 4])) require and produce?",
        options: ["No import needed, [1, 2, 3, 4]", "import itertools, produces [1, 2, 3, 4]", "import itertools, produces [(1, 2), (3, 4)]", "Error without import"],
        correctAnswer: "import itertools, produces [1, 2, 3, 4]"
    },
    {
        id: 23,
        question: "What is the result of: {1: 'a', 2: 'b'}.pop(3, 'default')?",
        options: ["'default'", "KeyError", "None", "3"],
        correctAnswer: "'default'"
    },
    {
        id: 24,
        question: "What does [x if x > 2 else 0 for x in [1, 2, 3, 4]] produce?",
        options: ["[0, 0, 3, 4]", "[1, 2, 3, 4]", "[3, 4]", "Error"],
        correctAnswer: "[0, 0, 3, 4]"
    },
    {
        id: 25,
        question: "What is the output of: print(sum([[1, 2], [3, 4]], []))?",
        options: ["[1, 2, 3, 4]", "10", "[[1, 2], [3, 4]]", "Error"],
        correctAnswer: "[1, 2, 3, 4]"
    },
    {
        id: 26,
        question: "What does {'a': 1, 'b': 2, 'c': 3}.items() return?",
        options: ["[('a', 1), ('b', 2), ('c', 3)]", "dict_items view object", "{'a': 1, 'b': 2, 'c': 3}", "(['a', 'b', 'c'], [1, 2, 3])"],
        correctAnswer: "dict_items view object"
    },
    {
        id: 27,
        question: "What is the result of: next(iter([1, 2, 3]))?",
        options: ["[1, 2, 3]", "1", "3", "Error"],
        correctAnswer: "1"
    },
    {
        id: 28,
        question: "What does list(filter(None, [0, 1, False, True, '', 'hello'])) produce?",
        options: ["[1, True, 'hello']", "[0, 1, False, True, '', 'hello']", "[False, True]", "[0, False, '']"],
        correctAnswer: "[1, True, 'hello']"
    },
    {
        id: 29,
        question: "What is the output of: print({1, 2, 3}.issubset({1, 2, 3, 4}))?",
        options: ["True", "False", "{1, 2, 3}", "Error"],
        correctAnswer: "True"
    },
    {
        id: 30,
        question: "What does collections.Counter('aabbcc').most_common(1) return?",
        options: ["[('a', 2)]", "['a']", "{'a': 2}", "Error without import"],
        correctAnswer: "[('a', 2)]"
    },
    {
        id: 31,
        question: "What is the result of: list(enumerate(['a', 'b'], start=1))?",
        options: ["[(0, 'a'), (1, 'b')]", "[(1, 'a'), (2, 'b')]", "[('a', 1), ('b', 2)]", "Error"],
        correctAnswer: "[(1, 'a'), (2, 'b')]"
    },
    {
        id: 32,
        question: "What does functools.reduce(lambda x, y: x + y, [1, 2, 3, 4]) return?",
        options: ["10", "[1, 2, 3, 4]", "Error without import", "4"],
        correctAnswer: "10"
    },
    {
        id: 33,
        question: "What is the output of: print('test'.center(10, '*'))?",
        options: ["'***test***'", "'test******'", "'***test***'", "'**test****'"],
        correctAnswer: "'***test***'"
    },
    {
        id: 34,
        question: "What does list(dict.fromkeys(['a', 'b', 'a', 'c'])) preserve?",
        options: ["['a', 'b', 'a', 'c']", "['a', 'b', 'c'] in insertion order", "{'a', 'b', 'c'} unordered", "Error"],
        correctAnswer: "['a', 'b', 'c'] in insertion order"
    },
    {
        id: 35,
        question: "What is the result of: [].append(1) or [1]?",
        options: ["[1]", "None", "[[1]]", "Error"],
        correctAnswer: "[1]"
    },
    {
        id: 36,
        question: "What does {(1, 2): 'a', (3, 4): 'b'}[(1, 2)] return?",
        options: ["'a'", "(1, 2)", "['a']", "Error - lists can't be keys"],
        correctAnswer: "'a'"
    },
    {
        id: 37,
        question: "What is the output of: print(int('FF', 16))?",
        options: ["255", "FF", "15", "Error"],
        correctAnswer: "255"
    },
    {
        id: 38,
        question: "What does {1, 2, 3}.symmetric_difference({2, 3, 4}) produce?",
        options: ["{1, 4}", "{2, 3}", "{1, 2, 3, 4}", "Error"],
        correctAnswer: "{1, 4}"
    },
    {
        id: 39,
        question: "What is the result of: sorted(['10', '2', '30'], key=int)?",
        options: ["['2', '10', '30']", "['10', '2', '30']", "[2, 10, 30]", "Error"],
        correctAnswer: "['2', '10', '30']"
    },
    {
        id: 40,
        question: "What does [x for x in range(10) if x % 2 == 0 if x % 3 == 0] produce?",
        options: ["[0, 6]", "[0, 2, 4, 6, 8]", "[0, 3, 6, 9]", "[6]"],
        correctAnswer: "[0, 6]"
    },
    {
        id: 41,
        question: "What is the output of: print(bin(10)[2:])?",
        options: ["'1010'", "'0b1010'", "'b1010'", "10"],
        correctAnswer: "'1010'"
    },
    {
        id: 42,
        question: "What does dict(a=1).update(b=2) return?",
        options: ["{'a': 1, 'b': 2}", "None", "{'b': 2}", "Error"],
        correctAnswer: "None"
    },
    {
        id: 43,
        question: "What is the result of: max([1, 2], [1, 3], [2, 1])?",
        options: ["[2, 1]", "[1, 3]", "3", "Error"],
        correctAnswer: "[2, 1]"
    },
    {
        id: 44,
        question: "What does 'abc'.zfill(5) produce?",
        options: ["'abc00'", "'00abc'", "'0abc0'", "'abc'"],
        correctAnswer: "'00abc'"
    },
    {
        id: 45,
        question: "What is the output of: print(list(reversed(range(3))))?",
        options: ["[2, 1, 0]", "[0, 1, 2]", "range(2, -1, -1)", "Error"],
        correctAnswer: "[2, 1, 0]"
    },
    {
        id: 46,
        question: "What does {**{'a': 1}, 'a': 2} create?",
        options: ["{'a': 1}", "{'a': 2}", "{'a': [1, 2]}", "Error"],
        correctAnswer: "{'a': 2}"
    },
    {
        id: 47,
        question: "What is the result of: list(map(lambda x: x[0], ['ab', 'cd', 'ef']))?",
        options: ["['a', 'c', 'e']", "['ab', 'cd', 'ef']", "['b', 'd', 'f']", "Error"],
        correctAnswer: "['a', 'c', 'e']"
    },
    {
        id: 48,
        question: "What does '1,2,3'.split(',') produce?",
        options: ["['1', '2', '3']", "[1, 2, 3]", "'1 2 3'", "['1,2,3']"],
        correctAnswer: "['1', '2', '3']"
    },
    {
        id: 49,
        question: "What is the output of: print(pow(2, 3, 5))?",
        options: ["8", "3", "13", "Error"],
        correctAnswer: "3"
    },
    {
        id: 50,
        question: "What does dict(enumerate(['a', 'b', 'c'])) create?",
        options: ["{0: 'a', 1: 'b', 2: 'c'}", "{'a': 0, 'b': 1, 'c': 2}", "[(0, 'a'), (1, 'b'), (2, 'c')]", "Error"],
        correctAnswer: "{0: 'a', 1: 'b', 2: 'c'}"
    },
];

export default questionBank;
