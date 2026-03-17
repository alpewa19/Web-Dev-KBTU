class Character:
    def __init__(self, name, power_level, domain):
        self.name = name
        self.power_level = power_level
        self.domain = domain

    def attack(self):
        return f"{self.name} attacks with cursed energy."

    def introduce(self):
        return f"I am {self.name}. My power level is {self.power_level}."

    def __str__(self):
        return f"{self.name} | Power: {self.power_level} | Domain: {self.domain}"


class Sorcerer(Character):
    def __init__(self, name, power_level, domain, grade):
        super().__init__(name, power_level, domain)
        self.grade = grade

    def attack(self):
        return f"Sorcerer {self.name} uses a cursed technique!"

    def exorcise_curse(self):
        return f"{self.name} exorcises a curse."


class Curse(Character):
    def __init__(self, name, power_level, domain, threat_level):
        super().__init__(name, power_level, domain)
        self.threat_level = threat_level

    def attack(self):
        return f"Curse {self.name} attacks with destructive cursed energy!"

    def spread_fear(self, human):
        human.negativity += 20
        return f"{self.name} spreads fear. {human.name}'s negativity increases!"


class Human(Character):
    def __init__(self, name, power_level, domain, negativity):
        super().__init__(name, power_level, domain)
        self.negativity = negativity

    def create_curse(self):
        if self.negativity >= 50:
            return Curse("New Born Curse", 300, "Unknown Domain", "Low")
        else:
            return None