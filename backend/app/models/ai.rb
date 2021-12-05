class Ai < ApplicationRecord
  InitialELO = 1200

  def initELO
    self.elo = InitialELO
  end
end
