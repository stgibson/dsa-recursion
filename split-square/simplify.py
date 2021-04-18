"""Simplify a split square:

A simple square is already simplified::

    >>> simplify(0)
    0

A split square containing four simple filled squares can be
simplified to a simple filled square::

    >>> simplify([1, 1, 1, 1])
    1

A split square containing four simple empty squares can be
simplified to a simple empty square::

    >>> simplify([0, 0, 0, 0])
    0

A split square containing mixed squares cannot be simplified::

    >>> simplify([1, 0, 1, 0])
    [1, 0, 1, 0]

These can be simplified even when nested::

    >>> simplify([1, 0, 1, [1, 1, 1, 1]])
    [1, 0, 1, 1]

Simplification should nest, so if we can simplify one split square
into a simple square and now an outer split square can be
simplified, it should::

    >>> simplify([1, 1, 1, [1, 1, 1, 1]])
    1

    >>> simplify([[1, 1, 1, 1], [1, 1, 1, 1], 1, 1])
    1

    >>> simplify([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1])
    [1, 0, [1, 0, 1, 1], 1]

Be careful that we don't "simplify" a set of matching mixed squares:

    >>> simplify([[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]])
    [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]]
"""

def items_match(ls):
    """Determines if all items in ls match"""

    n = len(ls)
    if n == 0:
        return True

    firstItem = ls[0]
    for i in range(1, n):
        if ls[i] != firstItem:
            return False
    return True

def simplify(s):
    """Simplify a split square:"""

    # base case: s is simple
    if s == 0 or s == 1:
        return s

    # normal case
    new_s = []
    # use this to determine if even need to check for further simplification
    lists_left = False
    for square in s:
        new_square = simplify(square)
        new_s.append(new_square)
        if type(new_square) == list:
            lists_left = True
    if not lists_left and items_match(new_s):
        return new_s[0]
    return new_s

if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASS; YOU MADE THAT SEEM SIMPLE!!\n")
