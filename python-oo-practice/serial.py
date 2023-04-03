"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self,start):
        self.start = self.next = start;
    
    def __repr__(self):
        """make a new geneator, starting at start"""
        return f'<serialGenerator start={self.start} next={self.next}>'

    def generate(self):
        self.next += 1
        return self.next -1 
    
    def reset(self):
        self.next = self.start

    


